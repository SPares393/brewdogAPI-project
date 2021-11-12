import React from "react";
import BeerFilters from "./BeerFilters";
import { shallow } from "enzyme";

describe("BeerFilters tests", () => {
    let component;

    beforeEach(() => {
        component = shallow(<BeerFilters />);
    })

    it("should render", () => {
        expect(component).toBeTruthy();
    })
})