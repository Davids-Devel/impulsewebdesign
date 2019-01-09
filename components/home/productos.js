import React from "react";

var Productos = props => (
	<div id="mainProductos">
	    <div className={props.className1}></div>                
	    <div className={props.className2}></div>                
	    <div className={props.className3}></div>
	    <div className={props.className4}></div>

		<div className={props.className5} style={{marginTop:300+"px"}}></div>
		<div className={props.className6} style={{marginTop:300+"px"}}></div>
		<div className={props.className7} style={{marginTop:300+"px"}}></div>
		<div className={props.className8} style={{marginTop:300+"px"}}></div>
		<style jsx>
		{`
	#mainProductos{
	    width: 100%;
	    height: 600px;
	    background: red;
	    padding: 100px 0;
	}
	.productos{
	    float: left;
	    width: 20%;
	    height: 200px;
	    margin: 0 2.5% 50px 2.5%;
	    background: white;
	}
	.hide{
	    opacity: 0;
	}
	.show1{
	    position: absolute;
	    left: 2.5%;
	    animation: forwards fade-in ease 2s;
	}
	.show2{
	    position: absolute;
	    left: 25%;
	    animation: forwards fade-in ease 2s; 
	}
	.show3{
	    left: 50%;
	    position: absolute;
	    animation: forwards fade-in ease 2s; 
	}
	.show4{
	    left: 75%;
	    position: absolute;
	    animation: forwards fade-in ease 2s; 
	}
	@keyframes fade-in{
	    from{
	        opacity: 0;
	    }
	    to{
	        opacity:  1;
	    }
	}
`}
		</style>
	</div>
);

export default Productos;