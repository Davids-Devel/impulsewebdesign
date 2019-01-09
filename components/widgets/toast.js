import React, { Component } from "react";
import { MdRemove } from "react-icons/md";
import { IconContext } from "react-icons";

class Toast extends Component{
	constructor(){
		super();
		this.state = {
			view:null
		}
		this.closeToast = this.closeToast.bind(this);
		this.i = 1;
	}
	closeToast(){
		this.setState({
			view:false,
		});
	}
	componentWillReceiveProps(nextProps){
		if (nextProps.active === true) {
			var i = 1;
			this.timer = setInterval(()=>{
				i++; 
				if (i === 5) {
					this.closeToast();
					clearInterval(this.timer);
				}
			}, 1000);
			this.setState({
				view:true
			});
		}
	}
	render(){
		var view;
		if (this.state.view === true) {
			view = "activeToast";
		} else if (this.state.view === false) {
			view = "deactiveToast";
		} else {
			view = "nullToast";
		}
		return(
			<IconContext.Provider value={{
				color: '#f7f7f7',
				size: 30,
				style:{
					position:"absolute",
					top:"30%",
					right: 10,
					cursor:"pointer"
				}
			}}>
				<div id="toast" className={view}>
					<div>{this.props.message}</div>
					<MdRemove onClick={this.closeToast} />
				</div>
				<style jsx>{`
	#toast{
		height:auto;
		width: auto;
		max-width: 500px;
		background: #3ba99c;
		margin: auto;
		color: white;
		padding: 20px 50px 20px 20px;
		text-align: center;
		border-radius: 5px;
		box-shadow: black 1px 1px 5px;
		position: fixed;
		right: 50px;
	}
	.nullToast{
		display:none;
	}
	.activeToast{
		animation:slideTop .5s ease;
		bottom: 80px;
	}
	.deactiveToast{
		animation: slideDown .5s ease;
		bottom:-100px;
	}
	@keyframes slideTop {
		0%{
			bottom:-100px;
		}
		100%{
			bottom:80px;
		}
	}
	@keyframes slideDown {
		0%{
			bottom:80px;
		} 
		100% {
			bottom:-100px;
		}
	}
`}</style>
			</IconContext.Provider>
		);
	}
}
export default Toast;