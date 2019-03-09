import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";

import Router from "./Router";
import ListPage from "./ListPage";
import NotFound from "./NotFound";
import AddPage from "./AddPage";
import EditPage from "./EditPage";

describe("Router", () => {
	let wrapper;

	it("redirects to 404 for invalid path", () => {
		wrapper = mount(
			<MemoryRouter initialEntries={["/random"]}>
				<Router />
			</MemoryRouter>
		);
		expect(wrapper.find(ListPage)).toHaveLength(0);
		expect(wrapper.find(AddPage)).toHaveLength(0);
		expect(wrapper.find(EditPage)).toHaveLength(0);
		expect(wrapper.find(NotFound)).toHaveLength(1);
	});

	it("redirects to correct pages according to valid path", () => {
		// ListPage(Home)
		wrapper = mount(
			<MemoryRouter initialEntries={["/"]}>
				<Router />
			</MemoryRouter>
		);
		expect(wrapper.find(ListPage)).toHaveLength(1);
		expect(wrapper.find(AddPage)).toHaveLength(0);
		expect(wrapper.find(EditPage)).toHaveLength(0);
		expect(wrapper.find(NotFound)).toHaveLength(0);

		// AddPage
		wrapper = mount(
			<MemoryRouter initialEntries={["/add/12345"]}>
				<Router />
			</MemoryRouter>
		);
		expect(wrapper.find(ListPage)).toHaveLength(0);
		expect(wrapper.find(AddPage)).toHaveLength(1);
		expect(wrapper.find(EditPage)).toHaveLength(0);
		expect(wrapper.find(NotFound)).toHaveLength(0);

		// EditPage
		wrapper = mount(
			<MemoryRouter initialEntries={["/edit/12345"]}>
				<Router />
			</MemoryRouter>
		);
		expect(wrapper.find(ListPage)).toHaveLength(0);
		expect(wrapper.find(AddPage)).toHaveLength(0);
		expect(wrapper.find(EditPage)).toHaveLength(1);
		expect(wrapper.find(NotFound)).toHaveLength(0);
	});
});
