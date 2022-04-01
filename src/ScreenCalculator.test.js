import React from "react";
import { shallow } from "enzyme";
import { ScreenCalculator } from "./ScreenCalculator";


describe("Pruebas del componente <ScreenCalculator/>", ()=>{
    test("debe mostrarse bien", () => {
        const wrapper = shallow(<ScreenCalculator/>)
        expect(wrapper).toMatchSnapshot();
    })
})

