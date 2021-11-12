import React from "react";
import BeerCardFull from "./BeerCardFull";
import { shallow } from "enzyme";
import beers from "../../beers";

describe("BeerCardFull tests", () => {
    let component;
    let testBeer;

    beforeEach(() => {
        testBeer = beers[0];
        component = shallow(<BeerCardFull beer={testBeer}/>);
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

    it("should display the correct ABV, pH, IBU, and EBC", () => {
        expect(component.text()).toContain(`${testBeer.abv}%`);
        expect(component.text()).toContain(testBeer.ph);
        expect(component.text()).toContain(testBeer.ibu);
        expect(component.text()).toContain(testBeer.ebc);
    })

})