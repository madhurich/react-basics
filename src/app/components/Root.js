import React from "react";

import {Header} from "./Header";


export class Root extends React.Component{
	render(){
		return(
				<div className="container">
					<Header/>
					<div>{this.props.children}</div>
				</div>
			);
	}
}