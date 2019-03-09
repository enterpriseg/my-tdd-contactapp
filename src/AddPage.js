import React, { Component } from "react";

class AddPage extends Component {
	state = { name: "" };

	handleChange = property => {
		return e => this.setState({ [property]: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.addPerson(this.state);
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					id="name"
					name="name"
					type="text"
					onChange={this.handleChange("name")}
				/>
				<button type="submit">Add Person</button>
			</form>
		);
	}
}

export default AddPage;
