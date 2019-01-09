import React,{Component} from "react";
import Router from "next/router";
import Input from "muicss/lib/react/input";
import {IconContext} from "react-icons";
import { MdEmail, MdLockOutline } from "react-icons/md";
import Toast from "../components/widgets/toast";
import Link from "next/link";
import NextHead from 'next/head';
import Head from "../components/head";

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
		this.inputStyles = {
			display:"inline-block",
			width:"50%",
			marginTop:30
		}
		this.redirect = false;
		this.onSubmit = this.onSubmit.bind(this);
		this.check = this.check.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	static async getInitialProps({ req, res }) {
		const logged = req.session.logged || false;
		if (!logged) {
			if (res) {
				res.writeHead(302, {
					Location: 'http://localhost:3000'
				});
			} else {
				Router.push("/");
			}
		}
		return {}
	}
	handleInputChange({target}) {
		let {type, name} = target;
		let value = type === 'checkbox' ? target.checked : target.value;
		this.setState({
			[name]: value
		});
	}
	onSubmit = async e => {
		e.preventDefault();
		if (this.state.pass && this.state.email) {
			try {
				let request = await fetch(`http://localhost:3000/auth`, {
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
							toastMessage:"Usuario no Encontrado\nVerifique que el correo y la contraseña estan correctos",
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
						Router.push("/my-account");
						break;
					default: break;
				}
			} catch(err) {
				this.setState({
					toastMessage:"Ha ocurrido un error en el servidor. Intentelo de nuevo.",
					activeToast:true
				});
				setTimeout(()=> this.setState({
					activeToast:false
				}), 100);
				console.log(err);
			}
		} else if (!this.state.email) {
			this.setState({
				toastMessage:"Ingrese su Email.",
				activeToast:true
			});
			setTimeout(()=> this.setState({
				activeToast:false
			}), 100);
		} else if (!this.state.pass) {
			this.setState({
				toastMessage:"Ingrese su Contraseña.",
				activeToast:true
			});
			setTimeout(()=> this.setState({
				activeToast:false
			}), 100);
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
				<Head title="Iniciar Sesion - Impulse Web Design"/>
				<NextHead>
					<link rel="stylesheet" href="/static/mui.min.css" media="screen"/>
				</NextHead>
				<IconContext.Provider value={{
					color: '#21897e',
					size: 30,
					style: {
						margin:"20px 10% -15px",
						display:"inline-block"
					}
				}}>
					<form onSubmit={this.onSubmit} id="login">
						<h2>Login</h2>
						<MdEmail />
						<Input
						 style={this.inputStyles}
						 onChange={this.handleInputChange}
						 floatingLabel={true}
						 type="text"
						 label="Email"
						 name="email"
						/>
						<MdLockOutline />
						<Input
						 style={this.inputStyles}
						 type="password"
						 label="Password"
						 name="pass"
						 onChange={this.handleInputChange}
						 floatingLabel={true}
						/>
						<input type="submit" value="Enviar"/>
						<div>
							<span style={{marginLeft:"10%",display:"block"}}>¿No estas Registrado? <Link href="/register"><a>¡Regístrate!</a></Link></span>
							<span style={{marginLeft:"10%",display:"block"}}>¿Olvidaste Tu Contraseña?</span>
						</div>
					</form>
				</IconContext.Provider>
				<Toast message={this.state.toastMessage} active={this.state.activeToast} />
				<style jsx>{`
	#main-login{
	    position: absolute;
	    width: 100%;
	    height: 100%;
	    top: 0;
	    left: 0;
	    background: #f7f7f7;
	}
	form#login{
	    margin-top: 150px;
	    margin-left:auto;
	    margin-right: auto;
	    margin-bottom: 50px;
	    padding: 10px 0;
	    width:80%;
	    height: 420px;
	    background: white/*#21897e*/;
	    border-radius: 4px;
	    box-shadow: rgba(50, 50, 50, .5) 2px 2px 2px;
	}
	@media screen and (min-width: 650px) {
	    form#login {
	        width: 60%;
	    }
	}
	@media screen and (min-width: 650px) {
	    form#login {
	        width: 40%;
	    }
	}
	form#login h2{
	    text-align: center;
	    color: #087f23;
	    font-size: 32px;
	    font-weight: 500;
	}
	form#login input[type="submit"]{
	    display: block;
	    margin: 50px auto;
	    background: white;
	    border-radius: 100px;
	    border: none;
	    color: #087f23;
	    font-size: 17px;
	    border: solid 2px #087f23;
	    width: 160px;
	    height: 35px;
	    cursor: pointer;
	    transition: .6s ease;
	
	}
	form#login input[type="submit"]:hover{
	    background: #087f23;
	    color: white;
	    border: none;
	    width: 160px;
	    height: 35px;
	}
	
	.mui-textfield, .mui-select{
	    width: 70%;
	    margin: auto
	}
`}</style>
			</div>
		);
	}
}
export default Login;