import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";

import Router from "./Router";
import ListPage from "./ListPage";
import NotFound from "./NotFound";

describe("Router", () => {
	it("redirects to 404 for invalid path", () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={["/random"]}>
				<Router />
			</MemoryRouter>
		);
		expect(wrapper.find(ListPage)).toHaveLength(0);
		expect(wrapper.find(NotFound)).toHaveLength(1);
	});

	it("redirects to ListPage as default home page", () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={["/"]}>
				<Router />
			</MemoryRouter>
		);
		expect(wrapper.find(ListPage)).toHaveLength(1);
		expect(wrapper.find(NotFound)).toHaveLength(0);
	});
});
