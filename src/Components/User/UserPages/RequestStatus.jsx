import React, {Component}from "react";

class RequestStatus extends Component{
	constructor(){
		super();
		this.state = {
			tab:"match.params.tab"
		}
		this.componentWillUpdate = this.componentWillUpdate.bind(this);
 	}
 	componentWillUpdate(e, a){
 		console.log(e, a)
 	}
	render() {
		return(<div>{this.state.tab}</div>)
	}
}
export default RequestStatus;