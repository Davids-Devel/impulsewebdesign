import React, { Component } from "react";
import "./Register.css";
import  Input  from "muicss/lib/react/input";
import { MdLockOutline, MdMail, MdAccountCircle } from "react-icons/md";
import { PropTypes } from "prop-types";
import Toast from "../Widgets/Toast";
import store from "../../Store/store";

class Register extends Component{
    constructor(){
        super();
        this.state={
            name:"",
            userName: "",
            reEmail:"",
            pass: "",
            rePass:"",
            email: "",
            company:"",
            nulo:null,
            messageHandler:"Email Enviado Exitosamente,\nRevise Su Correo Para La Verificacion",
            activeToast:false,
            count:null,
            app:null
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        store.subscribe(()=>this.setState({count:store.getSate().count}));
    }
    static childContextTypes = {
        reactIconBase: PropTypes.object
    };
    getChildContext() {
        return {
            reactIconBase: {
                color: '#21897e',
                size: 30,
                style:{
                    marginTop:-55,
                    marginLeft: 45
                }
                
            }
        }
    }
    componentWillMount(){
        var cuenta;
        switch (this.props.location.pathname){
            case "/register/enterprise":
            cuenta = <div>
				<Input
					 floatingLabel={true}
					 label="Nombre de la empresa"
					 name="companyName"
					 onChange={this.handleInputChange}
					 type="text"
					/>
					<MdAccountCircle />
				</div>
                break;
            case "/register/personal":
                cuenta = <div>
					<Input
					 floatingLabel={true}
					 label="Nombre"
					 name="name"
					 onChange={this.handleInputChange}
					 type="text" 
					/>
					<MdAccountCircle />
					<Input
					 floatingLabel={true}
					 label="Apellido"
					 name="lastName"
					 onChange={this.handleInputChange}
					 type="text"
					/>
					<MdAccountCircle />
				</div>
				break;
			default: break;
        }
    }
    handleInputChange({target}) {
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setTimeout(() => this.setState({[name]: value}), 1000);
    }
    onSubmit = async event=>{
        event.preventDefault();
        var name;
        switch (this.props.location.pathname) {
            case "/register/personal":
                name = `${this.state.name} ${this.state.lastName}`;
                break;
            case "/register/enterprise":
                name = this.state.companyName;
                break;
            default: break;
        }
        if (this.state.email === this.state.reEmail && this.state.pass === this.state.rePass) {
            try {
                let request = await fetch(`/signin`, {
                    methods:"POST",
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
                    case "sucess":
                        break;
                    case "email-exists":
                        break;
                    default: break;
                }
            } catch(err) {
                console.log(err);
            }
        }
    }
    render(){
        return (<div id="mainRegister">
            <Toast message={this.state.messageHandler} active={this.state.activeToast} />
            <div>
                <form id="register" onSubmit={this.onSubmit}>
                    <h2>Registro de Usuario</h2>
                    {this.state.inputCount}
                    <Input 
                        invalid={this.state.reEmail !== "" && this.state.email !== this.state.reEmail}
                        floatingLabel={true}
                        label="Email"
                        name="email"
                        onChange={this.handleInputChange}
                        type="email" />
                    <MdMail />
                    <Input 
                        invalid={this.state.reEmail !== "" && this.state.email !== this.state.reEmail}
                        floatingLabel={true}
                        label="Re:Email"
                        name="reEmail"
                        onChange={this.handleInputChange}
                        type="email" />
                    <MdMail />
                    <Input 
                        invalid={this.state.rePass !== "" && this.state.pass !== this.state.rePass}
                        floatingLabel={true}
                        label="Password"
                        name="pass"
                        onChange={this.handleInputChange}
                        type="password" />
                    <MdLockOutline />
                    <Input 
                        invalid={this.state.rePass !== "" && this.state.pass !== this.state.rePass}
                        floatingLabel={true}
                        label="Re:Password"
                        name="rePass"
                        onChange={this.handleInputChange}
                        type="password" />
                    <MdLockOutline />
                    <input type="submit" value="Enviar"/>
                    <div style={{background:this.state.nulo, width:100+"px", height:100+"px"}}></div>
                </form>
            </div>
        </div>
        );
    }
}
export default Register;
