import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import NotFound from "./NotFound";
import ListPage from "./ListPage";

const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={ListPage} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
