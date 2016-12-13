import React from "react";
import {Link} from "react-router";

export const Header = (props) => {
	return (
				<div>
					<ul>
						<li><Link to={"/home"} activeStyle={{color: "pink"}}>Home</Link></li>
						<li><Link to={"/user/" + (8+11)} activeClassName="active">User</Link></li>
					</ul>
				</div>
			);
}