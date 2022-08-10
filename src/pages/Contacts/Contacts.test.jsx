import React from "react";
import {screen, render} from "@testing-library/react"
import Contacts from '../Contacts'

describe('Contacts', () =>{
    beforeEach(()=>{
        render(<Contacts />)
    })

    test('Displays the text', () =>{
        const heading = screen.getByRole('h1');
        expect(heading.textContent).toBe('This is the contacts page');
    })
})