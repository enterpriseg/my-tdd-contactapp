import React from "react";
import { shallow } from "enzyme";

import AddPage from "./AddPage";

describe("AddPage", () => {
	let wrapper;
	beforeEach(() => (wrapper = shallow(<AddPage />)));
	it("renders a form, input, and submit button", () => {
		expect(wrapper.find("form")).toHaveLength(1);
		expect(wrapper.find("input#name")).toHaveLength(1);
		expect(wrapper.find("button")).toHaveLength(1);
	});

	it("has default state and updates as the fields are being filled out", () => {
		expect(wrapper.state()).toEqual({ name: "" });

		const nameInput = wrapper.find("input#name");
		const name = "Batman";
		nameInput.simulate("change", { target: { value: name } });
		expect(wrapper.state()).toEqual({ name });
	});

	it("calls addPerson with the state", () => {
		const mockAddPerson = jest.fn();
		wrapper = shallow(<AddPage addPerson={mockAddPerson} />);
		const submitState = { name: "Batman" };
		wrapper.setState(submitState);

		wrapper.find("form").simulate("submit", { preventDefault: () => {} });
		expect(mockAddPerson).toHaveBeenCalledWith(submitState);
	});
});
