import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import {Root} from "./components/Root";
import {Home} from "./components/Home";
import {User} from "./components/User";


class App extends React.Component{
	render(){
		return(
				<Router history={browserHistory}>
					<Route path={"/"} component={Root}>
						<IndexRoute component={Home}/>
						<Route path={"user/:id"} component={User}/>
						<Route path={"home"} component={Home}/>
					</Route>
					<Route path={"user"} component={User}/>
					<Route path={"home"} component={Home}/>
				</Router>
			);
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));