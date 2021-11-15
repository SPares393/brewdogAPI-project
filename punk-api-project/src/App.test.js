import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";
import beers from "./beers";
import BeerCard from "./components/BeerCard/BeerCard";

describe("App tests", () => {
    let component;
    let mockFn;

    beforeEach(() => {
        mockFn = jest.fn();
        component = mount(<App beers={beers}/>);
    })

    it("should render", () => {
        expect(component).toBeTruthy();
    })

    it("should render the correct number of BeerCard components", () => {
        const numberOfBeers = beers.length;
        const numberOfCards = component.find(BeerCard).length;
        // expect(numberOfBeers).toEqual(numberOfCards.length);
        expect(numberOfCards).toHaveLength(6);
    })
})
