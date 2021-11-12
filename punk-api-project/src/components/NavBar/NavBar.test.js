import React from "react";
import NavBar from "./NavBar";
import { shallow } from "enzyme";

describe("NavBar tests", () => {
    let mockFn;
    let component;

    beforeEach(() => {
        mockFn = jest.fn();
        component = shallow(<NavBar onChange={mockFn}/>);
    })

    it("should render", () => {
        expect(component).toBeTruthy();
    })

    it("should call the parent function on change", () => {
        component.find("input").simulate("click");
        component.find("input").simulate("input", { target: { value: "User input"}});
        expect(mockFn).toHaveBeenCalled();

    })

    it("should call the parent function with 'User Input", () => {
        component.find("input").simulate("click");
        component.find("input").simulate("input", { target: { value: "User input"}});
        expect(mockFn).toHaveBeenCalledWith("User Input");
    })
})