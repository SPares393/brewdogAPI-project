import React from "react";
import CardEnd from "./CardEnd";
import { shallow } from "enzyme";

describe("CardEnd tests", () => {
    let component;

    beforeEach(() => {
        component = shallow(<CardEnd />);
    })

    it("should render", () => {
        expect(component).toBeTruthy();
    })
})