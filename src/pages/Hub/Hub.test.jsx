import React from "react";
import {screen, render} from "@testing-library/react"
import Hub from '../Hub'

describe('hub', () =>{
    beforeEach(()=>{
        render(<Hub />)
    })

    test('Displays the text', () =>{
        const heading = screen.getByRole('h1');
        expect(heading.textContent).toBe('This is the hub page');
    })
})