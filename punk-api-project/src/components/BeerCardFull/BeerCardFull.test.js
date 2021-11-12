import React from "react";
import BeerCardFull from "./BeerCardFull";
import { shallow } from "enzyme";
import beers from "../../beers";

describe("BeerCardFull tests", () => {
    let component;

    beforeEach(() => {
        component = shallow(<BeerCardFull beer={beers[0]}/>);
    })

    it("should render", () => {
        expect(component).toBeTruthy();
    })
})