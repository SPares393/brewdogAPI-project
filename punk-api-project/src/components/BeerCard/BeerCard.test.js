import React from "react";
import BeerCard from "./BeerCard";
import { shallow } from "enzyme";

describe("BeerCard tests", () => {
    let component;

    beforeEach(() => {
        component = shallow(<BeerCard />);
    })

    it("should render", () => {
        expect(component).toBeTruthy();
    })
})