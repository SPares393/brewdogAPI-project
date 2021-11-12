import React from "react";
import BeerCardShort from "./BeerCardShort";
import { shallow } from "enzyme";
import beers from "../../beers";

describe("BeerCardShort tests", () => {
    let component;

    beforeEach(() => {
        component = shallow(<BeerCardShort beer={beers[0]}/>);
    })

    it("should render", () => {
        expect(component).toBeTruthy();
    })
})