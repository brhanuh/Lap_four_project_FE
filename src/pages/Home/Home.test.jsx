import React from "react";
import {screen, render} from "@testing-library/react"
import Home from '../Home'

describe('home', () =>{
    beforeEach(()=>{
        render(<Home />)
    })

    test('Displays the text', () =>{
        const heading = screen.getByRole('h1');
        expect(heading.textContent).toBe('This is the home page');
    })
})