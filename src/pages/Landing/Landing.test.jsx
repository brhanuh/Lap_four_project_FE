import React from "react";
import {screen, render} from "@testing-library/react"
import Landing from '../Landing'

describe('landing', () =>{
    beforeEach(()=>{
        render(<Landing />)
    })

    test('Displays the text', () =>{
        const heading = screen.getByRole('h1');
        expect(heading.textContent).toBe('This is the landing page!');
    })
})