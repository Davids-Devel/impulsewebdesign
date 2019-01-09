import React, { Component } from 'react';
import Link from "next/link";
import { MdMenu, MdNotifications } from "react-icons/md";

const bgmenu = "/static/background-menu.jpg";
const logo = "/static/logo.png";

class Menu extends Component {
	constructor(){
		super();
		this.click = {pageClick: 0}
		this.state = {
			viewNav: false
		}
		this.style = {background: `url(${bgmenu})`, backgroundSize:"550px", backgroundPosition: "center"}
		this.shadowShow =  "shadowShow";
		this.shadowHide =  "shadowHide";

		this.clientWidth;

		this.clickMenu = this.clickMenu.bind(this);
		this.slideMenu = this.slideMenu.bind(this);
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
	render() {
		let {mobile, logged, profilePic, username} = this.props;
		return (
			<nav>
				<div id="nav-bar" onClick={mobile ? this.slideMenu : void(0)}>
					<div className='container'>
						<span className="flecha pull-left" onClick={!mobile ? this.slideMenu : void(0)}>
                            <MdMenu />
                        </span>
						{!mobile ? 
							logged ?
								<div className="pull-right">
                                    <MdNotifications style={{color: "#58cc72", fontSize: 40, position: "absolute", top: 15, right: 130, cursor: "pointer"}}/>
									<img src={profilePic} alt="User Profile" style={{borderRadius: "50%", width:60, marginTop:-15, cursor:"pointer"}}/>
								</div>
								:
								<span>
									<div className="pull-right">
										<Link href="/login">
											<a>Iniciar Sesión</a>
										</Link>
									</div>
									<div className="pull-right separador"></div>
									<div className="pull-right">
										<Link href="/register">
											<a>Registrarse</a>
										</Link>
									</div>
								</span>
							:
							""
						}
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
						{ mobile ? 
							logged ?
								<img 
								src={profilePic} 
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
                    {logged && 
                        <li onClick={this.clickMenu}>
                            <Link href="/my-account">
                                <a id="4">{username}</a>
                            </Link>
                        </li>
                    }
					<li onClick={this.clickMenu}><Link href="/"><a id="1">Home</a></Link></li>
					<li onClick={this.clickMenu}><Link href="/store"><a id="3">Tienda</a></Link></li>
					{mobile && !logged ? 
						<div>
							<li onClick={this.clickMenu}>
								<Link href="/login"><a id="5">Login</a></Link>
							</li>
							<li onClick={this.clickMenu}>
								<Link href="/register"><a id="6">Registrarse</a></Link>
							</li>
						</div>
						:""
					}
				</ul>
				<style jsx>
				{`
#cover{
    width: 100%;
    background: green;
    height: 100px
}
#nav-bar{
    width: 92%;
    background: white;
    height: 30px;
    padding: 20px 4%;
    z-index: 2;
    position: fixed;
    box-shadow: 1px 0 6px black;
}
#nav-bar div.container{
    width: 100%;
    height: 100%;
}
#nav-bar div.container span div:first-child{
    margin: 5px 0 0 10px;
}
#nav-bar div.container span div:last-child{
    margin: 5px 10px 0 0;
}
nav{
    width: 100%;
}
nav ul{
    text-align: center;
    height: 100%;
    top:0;
    background: #43A047;
    transition: .5s ease;
        z-index: 3;
    position: fixed;
    box-shadow: 0 1px 6px black;
    overflow-y: scroll;
}
nav ul li{
    cursor: pointer;
    list-style: none;
    display: block;
    padding: 20px 50px;
    background: #43A047;
    margin: 10px auto;
    text-decoration: none;
}
nav ul li:hover{
    background: #81C784;
    color: rgb(66,66,66);
    transition: .5s ease;
}
nav ul li:hover > a{
    color: rgb(66,66,66);
    transition: .5s ease;
}

nav ul li a{
    display: block;
    overflow: hidden;
    color: rgba(255,255,255,.87);
    text-decoration: none;
    width: 100%;
    margin: -20px -50px;
    padding: 20px 50px;
    height: 100%;
}
nav ul li:nth-child(2){
    background: rgba(0, 0, 0, 0) ;
    cursor: default;
}
nav ul li:nth-child(2) img{
    cursor: pointer;
}
#header-nav{
    cursor: default;
    padding: 100px 50px;
    color: rgb(39, 39, 39);
    background: #087f23;
}
#header-nav div{
    font-family: helvetica;
    width: 100%;
    height: 100%;
}
#header-nav div h1{
    color:black;
    margin-top: -80px;
}
#header-nav div h2{
    margin-top: 10px;
    font-size: 20px;
    color: #fff;
}
div.pull-right a{
    border: solid 2px #087f23;
    padding: 5px 15px;
    border-radius: 50px;
    text-decoration: none;
    color: #087f23;
}
#img-menu{
    margin-top: -92px;
    width: 120px;
    position: relative;
}
#logoMenu {
    margin:-20px auto 0 auto;
    width: 70px;
    text-align: center;
}
#shadow {
    position: fixed;
    width: 100%;
    height: 100%;
    right: 0;
    top: 0;
    z-index: 2;
    background: rgba(0, 0, 0, .6)
}
/*Clases*/
.img-circle{
    border-radius: 50%;
}
.activeClick{
    background: #81C784;
    color: rgb(66,66,66)
}
.shadowShow{
    display: block;
    opacity: 1;
    animation: fade-show ease .6s forwards;
}
.shadowHide{
    display: none;
    opacity: 0;
    animation: fade-hide ease 1s forwards;

}
.flecha{
    margin-top:-8px; 
    font-size: 40px;
    cursor: pointer;
    color: #087f23;
}
.pull-right{
    float: right !important;
}
.pull-left{
    float: left !important;
}
.separador{
    border: black solid 1px;
    height: 20px;
    margin-top: 2.5px
}
@keyframes fade-show {
    from{
        display: none;
        opacity: 0;
    }
    to{
        display: block;
        opacity: 1;
    }
}
@keyframes fade-hide {
    to{
        display: block;
        opacity: 1;
    }   
    from{
        display: none;
        opacity: 0;
    }
}
`}
				</style>
				<style global jsx>{`
                        *{
                          margin: 0;
                          padding: 0;
                        }
                        body {
                          margin: 0;
                          padding: 0;
                          background: #f7f7f7;
                          font-family: sans-serif;
                        }
                        .App {
                          overflow: hidden;
                          margin: 0;
                        }
                        .content{
                            margin-top:70px;
                        }
                        div#vista2{
                          margin-top: -5px;
                        }
                        a:hover {
                            text-decoration: none;
                        }
                    `}</style>
			</nav>
		);
	}
}
export default Menu;