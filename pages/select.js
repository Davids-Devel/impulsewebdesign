import React, { Component } from "react";
import  Input  from "muicss/lib/react/input";
import { IconContext } from "react-icons";
import { MdLockOutline, MdMail, MdAccountCircle } from "react-icons/md";
import Toast from "../components/widgets/toast";
import NextHead from 'next/head';
import Head from "../components/head";


class Register extends Component{
    constructor(){
        super();
        this.state={
            name:"",
            lastName:"",
            company:"",
            email: "",
            reEmail:"",
            pass: "",
            rePass:"",
            nulo:null,
            messageHandler:"Email Enviado Exitosamente,\nRevise Su Correo Para La Verificacion",
            activeToast:false
        }
        this.inputStyles = {
            display:"inline-block",
            width:"50%",
            marginTop:"30px"
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
	static async getInitialProps({query}) {
        console.log(query)
		const accountType = query.type;
        console.log(accountType)
		return { accountType }
	}
    handleInputChange({target}) {
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setTimeout(() => this.setState({[name]: value}), 1000);
    }
    onSubmit = async event=>{
        event.preventDefault();
        var name;
        var type;
        switch (this.props.accountType) {
            case "personal":
                name = `${this.state.name} ${this.state.lastName}`;
                type = "personal";
                break;
            case "enterprise":
                name = this.state.company;
                type = "enterprise";
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
                        name,
                        type,
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
        let count;
        switch (this.props.accountType){
            case "enterprise":
                count = <div>
                    <MdAccountCircle />
                    <Input
                     style={this.inputStyles}
                     floatingLabel={true}
                     label="Nombre de la empresa"
                     name="company"
                     onChange={this.handleInputChange}
                     type="text"
                    />
                </div>
                break;
            case "personal":
                count = <div>
                    <MdAccountCircle />
                    <Input
                     style={this.inputStyles}
                     floatingLabel={true}
                     label="Nombre"
                     name="name"
                     onChange={this.handleInputChange}
                     type="text" 
                    />
                    <MdAccountCircle />
                    <Input
                     style={this.inputStyles}
                     floatingLabel={true}
                     label="Apellido"
                     name="lastName"
                     onChange={this.handleInputChange}
                     type="text"
                    />
                </div>
                break;
            default: break;
        }
        return (<div id="mainRegister">
            <Head title="Registro - Impulse Web Design"/>
            <NextHead>
                    <link rel="stylesheet" href="/static/mui.min.css" media="screen"/>
            </NextHead>
            <Toast message={this.state.messageHandler} active={this.state.activeToast} />
            <div>
                <IconContext.Provider value={{
                    color: '#21897e',
                    size: 30,
                    style: {
                        margin:"20px 10% -15px",
                        display:"inline-block"
                    }
                }}>
                    <form id="register" onSubmit={this.onSubmit}>
                        <h2>Registro de Usuario</h2>
                        {count}
                        <MdMail />
                        <Input
                            style={this.inputStyles} 
                            invalid={this.state.reEmail !== "" && this.state.email !== this.state.reEmail}
                            floatingLabel={true}
                            label="Email"
                            name="email"
                            onChange={this.handleInputChange}
                            type="email" />
                        <MdMail />
                        <Input
                            style={this.inputStyles}
                            invalid={this.state.reEmail !== "" && this.state.email !== this.state.reEmail}
                            floatingLabel={true}
                            label="Re:Email"
                            name="reEmail"
                            onChange={this.handleInputChange}
                            type="email" />
                        <MdLockOutline />
                        <Input
                            style={this.inputStyles} 
                            invalid={this.state.rePass !== "" && this.state.pass !== this.state.rePass}
                            floatingLabel={true}
                            label="Password"
                            name="pass"
                            onChange={this.handleInputChange}
                            type="password" />
                        <MdLockOutline />
                        <Input
                            style={this.inputStyles} 
                            invalid={this.state.rePass !== "" && this.state.pass !== this.state.rePass}
                            floatingLabel={true}
                            label="Re:Password"
                            name="rePass"
                            onChange={this.handleInputChange}
                            type="password" />
                        <input type="submit" value="Enviar"/>
                        <div style={{background:this.state.nulo, width:100+"px", height:100+"px"}}></div>
                    </form>
                </IconContext.Provider>
            </div>
            <style jsx>{`
    #RegisterSelect{
        background: #f7f7f7;
        text-align: center;
        overflow: hidden;
        height: 100%
    }
    #RegisterSelect h1{
        margin-top: 50px
    }
    Link{
        width:150px;
    }
    #RegisterSelect div{
        width :100%;
    }
    #RegisterSelect div div{
        width: 80%;
        float: left;
        background: white;
        height: 550px;
        margin: 50px 10%;
        border: solid 1px rgba(0,0,0, .2)
    }
    @media screen and (min-width: 550px) {
        #RegisterSelect div div {
            height: 650px;
        }
    }
    @media screen and (min-width: 680px) {
        #RegisterSelect div div {
            width: 35%;
            height: 550px;
            margin: 50px 7.4%;
        }
    }
    #RegisterSelect div div ul{
        text-align: left;
        padding: 0 30px;
    }
    #RegisterSelect div div ul li{
        list-style:blue ;
        font-size: 16px;
    }
`}</style>
        </div>
        );
    }
}
export default Register;
