import React from 'react';
import landingImage from "../../assets/landing-page-impulse-web-design.jpg";
import './header.css';

var Header = () => {
    return (
        <div id="imgBack">
            <img src={landingImage} alt="Impulse Web Design, Diseño Web de calidad al alcance de tus manos." id="landing-image"/>
            <h1>Impulse Web Design</h1>
        </div>
    )
}
export default Header;