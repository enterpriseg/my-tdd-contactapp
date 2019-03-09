import React from "react";
import { shallow } from "enzyme";

import App from "./App";

describe("App", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<App />);
	});
	it("renders a main div", () => {
		expect(wrapper.find("div#main")).toHaveLength(1);
	});

	it("renders a Add Person button", () => {
		expect(wrapper.find("button#addPerson")).toHaveLength(1);
	});

	it("allows me to add person to the default", () => {
		const defaultPeople = [{ name: `Person's name` }];
		const newPerson = { name: "Daniel" };

		expect(wrapper.state().people).toEqual(defaultPeople);

		// exercise
		wrapper.instance().addPerson(newPerson);
		// assertion
		expect(wrapper.state().people).toEqual([...defaultPeople, newPerson]);
	});

	it("gives AddPage addPerson", () => {
		const addPage = wrapper.find("AddPage");

		expect(addPage.props().addPerson).toEqual(wrapper.instance().addPerson);
	});
});
