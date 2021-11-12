import React from "react";
import BeerCard from "./BeerCard";
import BeerCardShort from "../BeerCardShort/BeerCardShort";
import BeerCardFull from "../BeerCardFull/BeerCardFull";
import { shallow } from "enzyme";

describe("BeerCard tests", () => {
    let component;

    beforeEach(() => {
        component = shallow(<BeerCard />);
    })

    it("should render", () => {
        expect(component).toBeTruthy();
    })

    it("should not be showing full info by default", () => {
        expect(component.contains(<BeerCardShort />)).toBeTruthy();
        expect(component.contains(<BeerCardFull />)).toBeFalsy();
    })

    it("should show full info on click", () => {
        component.simulate("click");
        expect(component.contains(<BeerCardFull />)).toBeTruthy();
        expect(component.contains(<BeerCardShort />)).toBeFalsy();
    })
})