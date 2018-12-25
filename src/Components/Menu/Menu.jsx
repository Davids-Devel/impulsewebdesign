import React, { Component } from 'react';
import './Menu.css';
import logo from "../../assets/logo.png";
import bgmenu from "../../assets/background-menu.jpg";
import { Link } from "react-router-dom";
import store from "../../Store/store";
import { MdMenu } from "react-icons/md";


class Menu extends Component {
  constructor(){
    super();
    this.click = {pageClick: 0}
    this.state = {
      viewNav: false,
      displayName: null,
      login: false,
    }
    this.style = {background: `url(${bgmenu})`, backgroundSize:"550px", backgroundPosition: "center"}
    this.shadowShow =  "shadowShow";
    this.shadowHide =  "shadowHide";

    this.clickMenu = this.clickMenu.bind(this);
    this.slideMenu = this.slideMenu.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    store.subscribe(() => this.setState({
      login: store.getState().login,
      displayName: store.getState().displayName,
      photoURL: store.getState().photoURL
    }));
    
  }
  slideMenu(e){
    this.setState(prevState => ({
      viewNav: !prevState.viewNav
    }));
    e.stopPropagation();
  }
  clickMenu(e){
    if (this.click.pageClick === 0) {
      e.target.className = "activeClick";
    } else{
      let li = document.getElementById(this.click.pageClick);
      li.className = "";
      e.target.className = "activeClick";
    }
    this.click.pageClick = parseInt(e.target.id);
    this.setState(prevState => ({
      viewNav: !prevState.viewNav
    }));
    e.stopPropagation();
  }
  componentDidMount(){
    this.setState({
      login:sessionStorage.getItem("login")
    });
  }
	render() {
    const loged = this.state.login;
    let login = null
    if (!loged) {
      login = <span>
        <div className="pull-right">
         <Link to="/login">Iniciar Sesión</Link>
        </div>
        <div className="pull-right separador"></div>
        <div className="pull-right"><Link to="/register">Registrarse</Link></div></span>
    } else {
      login = <div className="pull-right"><img src={this.state.photoURL} alt="User Profile" style={{borderRadius: "50%", marginTop:-10, cursor:"pointer"}}/></div>
    }
		return (
      <nav>
        <div id="nav-bar" onClick={document.body.clientWidth < 480 ? this.slideMenu : undefined}>
          <div className='container'>
            <span className="flecha pull-left" onClick={document.body.clientWidth > 480 && this.slideMenu}><MdMenu /></span>
            {document.body.clientWidth > 480 && login}
          </div>
        </div>
        <div id="shadow" className={this.state.viewNav ? this.shadowShow : this.shadowHide } onClick={this.slideMenu}></div>
        <ul style={this.state.viewNav? {left:0}:{left:-100+"%"}}>
          <li id="header-nav" style={this.style}>
            <div>
              <h1>Impulse Web Design</h1>
              <h2>El codigo para tus ideas.</h2>
            </div>
          </li>
          <li>
            { document.body.clientWidth < 480 ? 
              loged === true ?
                <img 
                src={this.state.photoURL} 
                alt="Impulse Web Design Diseño web al alcance de tus manos" 
                className="img-circle" 
                id="img-menu"/> 
                :
                <img 
                src={logo} 
                alt="Impulse Web Design Diseño web al alcance de tus manos" 
                className="img-circle" 
                id="img-menu"/>
              :
                <img src={logo} alt="Impulse Web Design Diseño web al alcance de tus manos" className="img-circle" id="img-menu"/>
            }
          </li>
          <li onClick={this.clickMenu}><Link id="1" to="/">Home</Link></li>
          <li onClick={this.clickMenu}><Link id="2" to="/pedidos">Servicios</Link></li>
          <li onClick={this.clickMenu}><Link id="4" to="/Menu 4"> Menu 4</Link></li>
          {this.state.login && 
            <li onClick={this.clickMenu}>
              <Link id="3" to="/my-account">
                {this.state.displayName}
              </Link>
            </li>
          }
          {document.body.clientWidth < 480 && !this.state.login ? <li onClick={this.clickMenu}><Link id="5" to="/login">Login</Link></li>:""}
        </ul>
      </nav>
		);
  }
  
}
export default Menu;