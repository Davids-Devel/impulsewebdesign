import App, {Container} from 'next/app';
import React from 'react';
import Menu from "../components/menu";

class Layout extends App {
	static async getInitialProps({ctx}) {
		let {req, res, query} = ctx;
		/*Menu Middleware*/
		let mobile = false;
		if (req) {
			if (req.headers["user-agent"].match(/Android|Mobile|iPhone/)) {
				mobile = true;
			}
		}
		let data = {
			logged:false,
			profilePic:"/static/UserPic.jpg",
			username:"Davids Devel",
			mobile
		};
		/*const {logged} = req.session || false;
		if (!logged) {
			data = {
				logged:false,
				profilePic:"",
				username:""
			}
		} else {
			let {username, profilePic} = req.session;
			data = {
				logged:true,
				username,
				profilePic
			}
		}*/
		/*Routes Middleware*/
		switch(req.url) {
			case "/store":
				let {products, search} = query;
				data = {
					...data,
					products,
					search
				}
				break;
		}
		return data
	}
	render() {
		const {Component, pageProps, logged, username, profilePic, mobile} = this.props;
		let props = Object.keys(this.props).filter(e=>{
			if(e !== logged && e !== username && e !== profilePic && e !== mobile) {
				return this.props[e];
			}
		})
		console.log(props)
		return (
			<Container>
				<div className="App">
					<header id="header">
						<Menu profilePic={profilePic} logged={logged} username={username} mobile={mobile}/>
					</header>
					<div className="content">
						<Component {...pageProps} />
					</div>
				</div>
			</Container>
    	)
	}
}
export default Layout;