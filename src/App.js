import React, { Component } from "react";

import "./App.css";
import AddPage from "./AddPage";

class App extends Component {
	state = {
		people: [{ name: `Person's name` }]
	};

	addPerson = person => {
		this.setState({ people: [...this.state.people, person] });
	};
	render() {
		return (
			<div id="main">
				<button id="addPerson" />
				<AddPage addPerson={this.addPerson} />
			</div>
		);
	}
}

export default App;
