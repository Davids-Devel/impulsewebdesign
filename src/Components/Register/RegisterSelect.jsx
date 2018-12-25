import React from "react";
import "./RegisterSelect.css";
import Button from "../Widgets/Button";
import enterpriseDesign from "../../assets/diseño-web-empresas.jpg";
import personalDesign from "../../assets/diseño-web-personal.jpg";

let RegisterSelect = () =>{
    return (
        <div id="RegisterSelect">
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
        </div>
    )
}
export default RegisterSelect;