import React, {Component} from "react";

import Link from "next/link";

const logo = "/static/logo.png";

class noMatch extends Component {
	static async getInitialProps({ctx}) {
		let {statusCode} = ctx.res;
		let {url} = ctx.req;
		console.log(url, statusCode)
		let message;

		switch(statusCode) {
			case 404:
				message = `La ruta ${<b>{url}</b>} no se encuentra en este sitio.`
				break;
			case 500:
				message = "Error Interno del Servidor"
				break;
		}
		return {
			status:statusCode,
			message
		}
	}
	render() {
		let {status, message} = this.props;
		return(
			<div id="not-found-container">
				<h1>{status}</h1>
				<span>{message}<br/>
					<Link href="/">
						<a>Inicio</a>
					</Link>
				</span>
				<img src="/static/logo.png" alt=""/>
				<style jsx>{`
					#not-found-container {
						text-align: center;
						width:50%;
						background: white;
						margin: 10% auto 10px auto;
						padding: 50px 0 30px 0;
						box-shadow: 2px 2px 5px rgba(0,0,0,.3);
					} 
					#not-found-container h1{
						color: rgba(100,100,100,.5);
						font-size: 90px;
						margin: 0 auto 50px auto;
						font-weight: 600;
					}
					#not-found-container span {
						display: block;
					}
					#not-found-container img {
						margin-top:20px;
					}
					#not-found-container a {
						display: block;
						text-decoration: none;
						font-size: 20px;
						color:rgb(33, 137, 126);
						margin: 30px auto 0 auto;
					}
				`}</style>
			</div>
		)
	}
}
export default noMatch;