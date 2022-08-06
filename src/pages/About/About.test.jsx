import React from "react";
import {screen, render} from "@testing-library/react"
import About from '../About'

describe('About', () =>{
    beforeEach(()=>{
        render(<About />)
    })

    test('Displays the text', () =>{
        const heading = screen.getByRole('h1');
        expect(heading.textContent).toBe('This is the about page');
    })
})