import React, { Component } from 'react';
import './App.css';
import Menu from './Menu/Menu';
import Home from "./Home/index";
import Login from "./Login/Login";
import Register from "./Register/Register";
import RegisterSelect from "./Register/RegisterSelect";
import UserConfig from "./User/UserConfig";
import store from "../Store/store";
import UserPage from "./User/UserPage";
import NoMatch from "./NoMatch";
import TemplateStore from "./TemplateStore";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';

const auth = {
	authenticated:false
}
store.subscribe(()=>{
	auth.authenticated = store.getState().authenticated
})

const PrivateRoute = ({component:Component, ...rest})=>(
		<Route {...rest} render={props=>(
			auth.authenticated  === true 
			? <Component {...props} />
			: <Redirect to="/" />
			)} />
	)
class App extends Component {
	constructor(){
		super()
		this.state={
			uid:null,
			login:false
		}
		store.subscribe(()=>{
			this.setState({
				uid:store.getState().uid
			});
		});
	}
	render() {
		return (
			<Router>
				<div className="App">
					<header id="header">
						<Menu />
					</header>
					<div className="content">
						<Switch>
							<Route exact path="/" component={Home}/>
							<Route exact path="/login" component={Login}/>
							<Route exact path="/register" component={RegisterSelect} />
							<Route exact path="/register/personal" component={Register} />
							<Route exact path="/register/enterprise" component={Register} />
							<Route path="/store" component={TemplateStore} />
							<Route path="/user-config" component={UserConfig} />
							<Route path={"/my-account"} component={UserPage}/>
							<Route component={NoMatch} />
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}
export default App;