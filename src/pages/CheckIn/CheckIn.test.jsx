import React from "react";
import {screen, render} from "@testing-library/react"
import CheckIn from '../CheckIn'

describe('Checkin', () =>{
    beforeEach(()=>{
        render(<CheckIn />)
    })

    test('Displays the text', () =>{
        const heading = screen.getByRole('h1');
        expect(heading.textContent).toBe('This is the check in page');
    })
})