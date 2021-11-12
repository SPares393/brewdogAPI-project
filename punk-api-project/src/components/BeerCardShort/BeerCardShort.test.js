import React from "react";
import BeerCardShort from "./BeerCardShort";
import { shallow } from "enzyme";

describe("BeerCardShort tests", () => {
    let component;

    beforeEach(() => {
        component = shallow(<BeerCardShort />);
    })

    it("should render", () => {
        expect(component).toBeTruthy();
    })
})