import React from "react";
import { shallow } from "enzyme";

import App from "./App";

describe("App", () => {
	it("renders a main div", () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find("div#main")).toHaveLength(1);
	});
});
