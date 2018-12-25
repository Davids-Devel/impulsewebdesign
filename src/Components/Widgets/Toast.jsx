import React, { Component } from "react";
import "./Toast.css";
import { MdRemove } from "react-icons/md";
import { PropTypes } from "prop-types";

class Toast extends Component{
	constructor(){
		super();
		this.state = {
			view:null
		}
		this.closeToast = this.closeToast.bind(this);
		this.i = 1;
	}
	static childContextTypes = {
		reactIconBase: PropTypes.object
	}
	getChildContext() {
		return {
			reactIconBase: {
				color: '#f7f7f7',
				size: 30,
				style:{
					position:"absolute",
					top:"30%",
					right: 10,
					cursor:"pointer"
				}
			}
		}
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
		return(<div id="toast" className={view}>
				<div>{this.props.message}</div>
				<MdRemove onClick={this.closeToast} />
			</div>
		);
	}
}
export default Toast;