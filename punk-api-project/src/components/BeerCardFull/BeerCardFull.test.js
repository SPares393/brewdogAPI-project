import React from "react";
import BeerCardFull from "./BeerCardFull";
import { shallow } from "enzyme";

describe("BeerCardFull tests", () => {
    let component;

    beforeEach(() => {
        component = shallow(<BeerCardFull />);
    })

    it("should render", () => {
        expect(component).toBeTruthy();
    })
})