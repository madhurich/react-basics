import React from "react";
import {browserHistory, Link} from "react-router";

export class User extends React.Component{
	goToHome(){
		browserHistory.push("/home");
	}

	render(){
		return (
				<div>
					<h1>User component</h1>
					User Id: {this.props.params.id}<br/>
					Name: <input type="text"/>
					<button onClick={this.goToHome}>Go Home!</button>
					<button><Link to={"/home"}>Go Home!</Link></button>
				</div>
			);
	}
}