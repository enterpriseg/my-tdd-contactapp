import React from "react";
import { shallow } from "enzyme";

import App from "./App";

describe("App", () => {
	it("renders a main div", () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find("div#main")).toHaveLength(1);
	});

	it("renders a Add Person button", () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find("button#addPerson")).toHaveLength(1);
	});
});
