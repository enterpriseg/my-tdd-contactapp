import React from "react";
import { shallow } from "enzyme";
import NotFound from "./NotFound";

describe("NotFound", () => {
	it("renders a notFound div", () => {
		const wrapper = shallow(<NotFound />);
		expect(wrapper.find("div#notFound")).toHaveLength(1);
	});

	it("displays proper 404 message", () => {
		const wrapper = shallow(<NotFound />);
		const errorMessage = "404 Not Found";
		expect(wrapper.find("div#notFound").text()).toContain(errorMessage);
	});
});
