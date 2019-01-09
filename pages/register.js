import React from "react";
import Button from "../components/widgets/button";
import Head from "../components/head";

const enterpriseDesign = "/static/diseño-web-empresas.jpg";
const personalDesign = "/static/diseño-web-personal.jpg";

let RegisterSelect = () =>(
	<div id="RegisterSelect">
		<Head title="Registro - Impulse Web Design"/>
	    <h1>Selecciona tu tipo de Cuenta</h1>
	        <div>
	            <div>
	                <h2>Empresas</h2>
	                <img src={enterpriseDesign} alt="Diseño Web de empresas" style={{width:"100%"}}/>
	                <ul>
	                    <li>Diseño del logo de tu empresa.</li>
	                    <li>Composición de jingles radiales.</li>
	                    <li>Desarrollo Web estatico y dinamico.</li>
	                    <li>Hosting a escala Empresarial.</li>
	                    <li>Marketing online.</li>   
	                </ul>
	                <Button
	                text="Registrarse" 
	                redirectTo="/register/enterprise"
	                />
	            </div>
	            <div>
	                <h2>Personal</h2>
	                <img src={personalDesign} alt="Diseño Web Personal" style={{width:"100%"}}/>
	                <ul>
	                    <li>Diseño de tu blog</li>
	                    <li>Desarrollo de tus ideas.</li>
	                    <li>Pagina Web Administrable.</li>
	                    <li>Manejo de base de datos.</li>
	                    <li>Te ayudamos a crecer como website.</li>
	                </ul>
	            <Button 
	             text="Registrarse" 
	             redirectTo="/register/personal"
	            />
	        </div>
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

export default RegisterSelect;