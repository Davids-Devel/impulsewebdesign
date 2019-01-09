import React from 'react';

const Header = ({mobile}) => (
	<div id="imgBack">
		<img src="/static/landing-page-impulse-web-design.jpg" alt="Impulse Web Design, Diseño Web de calidad al alcance de tus manos." id="landing-image"/>
		<h1>Impulse Web Design</h1>
		{mobile ? 
			<img id="home-logo" src="/static/logo.png" alt="Impulse Web Design Logo"/>
			:
			<div id="iframe"></div>
		}
		<style jsx>
		{`
	#imgBack{
		width: 100%;
		z-index: 1;
		overflow: hidden;
		background: -moz-linear-gradient(left top,#388e3c, #b2fab4) ,
					-webkit-linear-gradient(left bottom,#388e3c, #b2fab4);
	}
	#imgBack h1{
		text-align: center;
		position: absolute;
		top: 80px;
		width: 100%;
		color: white;
	}
	#landing-image{
		width: 100%;
	}
	#iframe{
		width: 560px;
		height: 315px;
		background: black;
		position: absolute;
		top: 180px;
		left: 50%;
		margin-left:-280px;
	}
	#video{
		margin-top: 200px;
	}
	#home-logo {
		position: absolute;
		top: 160px;
		display: block;
		border-radius: 50%;
		left: 50%;
		margin-left: -60px;
	}
	@media screen and (min-width: 480px) {
		#home-logo {
			top: 250px
		}
	}
`}
		</style>
	</div>
)

export default Header;
