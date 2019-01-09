import React, {Component} from "react";
import Tab from "../components/user/tab";
import Link from "next/link";

const userPic = "/static/UserPic.jpg";

class UserPage extends Component {
	constructor(){
		super();
		this.state = {
			tab:""
		}
	}
	static async getInitialProps({req, res, query}) {
		const logged = req.session.logged || false;
		let data;
		if (!logged) {
			res.redirect(302, "/");
		} else {
			data.tab = query.tab;
		}
		return data
	}
	render(){
		let {tab} = this.props;
		return(<div>
				<aside style={{width:25+"%", float:"left"}}>
					<img src={userPic} style={{width:100+"%", borderRadius:"50%"}} alt="" />
					<h1>David Gonzalez</h1>
					<div>
						<ul>
							<li>
								<h2>Mis Plantillas</h2>
							</li>
							<li>Compradas: 0</li>
							<li>Vedidas: 0</li>
							<li>
								<h2>Saldo</h2>
							</li>
							<li>Total: 0$</li>
						</ul>
					</div>
				</aside>
				<div style={{width:"50%",float:"left"}}>
					<Tab tab={tab} />
				</div>
				<aside style={{right:0, top:200, width:25+"%", position:"fixed", background:"blue"}}>
					<ul style={{textAlign:"center"}}>
						<li>
							<Link href="/my-account/solds"><a>Plantillas Vendidas</a></Link>
						</li>
						<li>
							<Link href="/my-account/buyed"><a>Plantillas Compradas</a></Link>
						</li>
						<li>
							<Link href="/my-account/config"><a>Configuración</a></Link>
						</li>
					</ul>
				</aside>
			</div>
		);
	}
}
export default UserPage;