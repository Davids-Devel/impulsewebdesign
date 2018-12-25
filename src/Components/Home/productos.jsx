import React, { Component } from "react";
import "./productos.css";

var Productos = props => {
    return(
        <div id="mainProductos">
            <div className={props.className1}></div>                
            <div className={props.className2}></div>                
            <div className={props.className3}></div>
            <div className={props.className4}></div>

            <div className={props.className5} style={{marginTop:300+"px"}}></div>
            <div className={props.className6} style={{marginTop:300+"px"}}></div>
            <div className={props.className7} style={{marginTop:300+"px"}}></div>
            <div className={props.className8} style={{marginTop:300+"px"}}></div>
        </div>
    );
}
export default Productos;