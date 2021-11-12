import React from "react";
import BeerCardShort from "./BeerCardShort";
import { shallow } from "enzyme";
import beers from "../../beers";

describe("BeerCardShort tests", () => {
    let component;
    let testBeer;

    beforeEach(() => {
        testBeer = beers[0];
        component = shallow(<BeerCardShort beer={testBeer}/>);
    })

    it("should render", () => {
        expect(component).toBeTruthy();
    })

    it("should render the name, tagline, and description of the beer passed as props", () => {
        expect(component.text()).toContain(testBeer.name);
        expect(component.text()).toContain(testBeer.tagline);
        expect(component.text()).toContain(testBeer.description);
    })

    it("should display the correct image", () => {
        expect(component.find("img").prop("src")).toBe(testBeer.image_url);
    })

    it("should display the correct ABV", () => {
        expect(component.text()).toContain(`${testBeer.abv}%`);
    })

})