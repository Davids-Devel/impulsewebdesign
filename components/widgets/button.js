import React from "react";
import Link from "next/link";

const Button = props => {
	return(
		<div>
		<Link
		 href={props.redirectTo}
		 >
		<a className="buttonPersonal" >{props.text}</a>
		</Link>
		<style jsx>{`
	.buttonPersonal{
	    display: block;
	    margin-top: 50px;
	    margin-left:auto;
	    margin-right: auto;
	    padding: 8px 0 12px 0;
	    border-radius: 100px;
	    border: none;
	    font-size: 17px;
	    width: 150px;
	    height: 17px;
	    box-shadow: rgba(0, 0, 0, 1) 1px 1px 3px;
	    transition: .6s ease;
	    cursor: pointer;
	    text-decoration: none;
	    color:#8980f5;
	    background: white;
	}
	.buttonPersonal:hover{
	    text-decoration: none;
	    background: #8980f5;
	    color: white
	}
`}</style>
		</div>
	);
}

export default Button;