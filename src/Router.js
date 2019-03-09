import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import NotFound from "./NotFound";
import ListPage from "./ListPage";
import AddPage from "./AddPage";
import EditPage from "./EditPage";

const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={ListPage} />
				<Route path="/add/:personId" component={AddPage} />
				<Route path="/edit/:personId" component={EditPage} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
