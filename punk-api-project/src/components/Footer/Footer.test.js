import React from "react";
import Footer from "./Footer";
import { shallow } from "enzyme";

describe("Footer tests", () => {
    let component;

    beforeEach(() => {
        component = shallow(<Footer />);
    })

    it("should render", () => {
        expect(component).toBeTruthy();
    })
})