import React from "react";
import NavBar from "./NavBar";
import { shallow, mount } from "enzyme";

describe("NavBar tests", () => {
    // let mockFn;
    // let component;

    // beforeEach(() => {
    //     mockFn = jest.fn();
    //     component = shallow(<NavBar onChange={mockFn}/>);
    // })

    // it("should render", () => {
    //     expect(component).toBeTruthy();
    // })

    it.only("should call the parent function on change", () => {
        const mockFn = jest.fn();
        const component = shallow(<NavBar onChange={mockFn}/>);
        const inputValue = component.find("input");
        // component.find(".input").simulate("click");
        inputValue.simulate("change", { target: { value: "User input"}});
        expect(mockFn).toHaveBeenCalled();

    })

    it("should call the parent function with 'User Input", () => {
        component.find(".input").simulate("click");
        component.find(".input").simulate("change", { target: { value: "User input"}});
        expect(mockFn).toHaveBeenCalledWith("User Input");
    })
})