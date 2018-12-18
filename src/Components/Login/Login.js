import React,{Component} from "react";
import "./Login.css";
import Redirect from "react-router-dom/Redirect";
import store from "../../Store/store";
import {login} from "../../Store/actionCreators";
import  Input  from "muicss/lib/react/input";
import { PropTypes } from "prop-types";
import { MdEmail, MdLockOutline } from "react-icons/lib/md";
import Toast from "../Widgets/Toast";

class Login extends Component{
	constructor(){
		super();
		this.state={
			remember: false,
			email: "",
			pass: "",
			redirect:false,
			uid:null
		}
		this.redirect = false;
		this.onSubmit = this.onSubmit.bind(this);
		this.check = this.check.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	static childContextTypes = {
		reactIconBase: PropTypes.object
	};
	componentWillMount(){
		this.setState({
			app:store.getState().app
		});
	}
	getChildContext() {
		return {
			reactIconBase: {
				color: '#21897e',
				size: 30,
				style: {
					marginTop: -55,
					marginLeft: 45
				}

			}
		}
	}
	handleInputChange({target}) {
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	}
	onSubmit = async e => {
		e.preventDefault();
		try {
			let request = await fetch(`/login`, {
				method:"POST",
				headers:{
					"Content-Type":"application/json"
				},
				body:JSON.stringify({
					email:this.state.email,
					password:this.state.pass
				})
			});
			let data = await request.json();
			switch(data.status) {
				case "no-user":
					this.setState({
						toastMessage:"Verifique que el correo y la contraseña estan correctos",
						activeToast:true
					})
					setTimeout(()=>this.setState({
						activeToast:false
					}), 100);
					break;
				case "not-verified":
					this.setState({
						toastMessage:"Por favor verifique su cuenta para continuar",
						activeToast:true
					})
					setTimeout(()=>this.setState({
						activeToast:false
					}), 100);
					break;
				case "success":
					break;
				default: break;
			}
		} catch(err) {
			this.setState({
				toastMessage:"Ha ocurrido un error en el servidor\nIntentelo de nuevo.",
				activeToast:true
			})
			setTimeout(()=> this.setState({
				activeToast:false
			}), 100)
			console.log(err);
		}
	}
	check(){
		this.setState(prevState => ({
			remember: !prevState.remember
		}))
	}
	render(){
		return(
			<div id="main-login">
				<form onSubmit={this.onSubmit} id="login">
					<h2>Login</h2>
					<Input
					 onChange={this.handleInputChange}
					 floatingLabel={true}
					 type="text"
					 label="Email"
					 name="email"
					 />
					 <MdEmail />
					<Input
					 type="password"
					 label="Password"
					 name="pass"
					 onChange={this.handleInputChange}
					 floatingLabel={true}
					 />
					<MdLockOutline />   
					<input type="submit" value="Enviar"/>
				</form>   
				{this.state.redirect && <Redirect to={{pathname:"/my-account"}} />}
				<Toast message={this.state.toastMessage} active={this.state.activeToast} />
			</div>
		);
	}
}
export default Login;