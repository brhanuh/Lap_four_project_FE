import React from "react";
import {screen, render} from "@testing-library/react"
import Recommendations from '../Recommendations'

describe('Recommendations', () =>{
    beforeEach(()=>{
        render(<Recommendations />)
    })

    test('Displays the text', () =>{
        const heading = screen.getByRole('h1');
        expect(heading.textContent).toBe('This is the Recommendations page');
    })
})