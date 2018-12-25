import React, {Component} from "react";
import store from "../../Store/store";
import userPic from "../../assets/UserPic.jpg";
import RequestStatus from "./UserPages/RequestStatus";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
class UserPage extends Component {
	constructor(){
		super();
		this.state = {
			displayName:""
		}
		store.subscribe(() => this.setState({displayName:store.getState().displayName}));
	}
	componentWillMount(){
		//console.log(this);
	}
	render(){
		return(<div>
				<aside style={{width:25+"%", float:"left"}}>
					<img src={userPic} style={{width:100+"%"}} alt="" />
					<h1>David Gonzalez</h1>
					<div>
						<ul>
							<li><h2>Mis Pedidos</h2></li>
							<li>Realizados: 0</li>
							<li>En Desarrollo: Titulo del Pedido</li>
							<li>En Espera: 0</li>
						</ul>
					</div>
				</aside>
				<div>
					<Router>
						<Route path="/my-account/:tab" component={RequestStatus} />
					</Router>
				</div>
				<aside style={{right:0, top:200, width:25+"%", position:"fixed", background:"blue"}}>
					<ul style={{textAlign:"center"}}>
						<li><Link to="/my-account/tab 1">Item 1</Link></li>
						<li><Link to="/my-account/tab 2">Item 2</Link></li>
						<li><Link to="/my-account/tab 3">Item 3</Link></li>
						<li><Link to="/my-account/tab 4">Item 4</Link></li>
					</ul>
				</aside>
		</div>
		);
	}
}
export default UserPage;