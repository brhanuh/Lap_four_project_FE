// import React from "react";
// import {screen, cleanup, render, waitForElement} from "@testing-library/react"
// import axiosMock from "axios"
// import Quotes from '../Quotes'

// //this and the mocks folder is supposed to mock an axios get request but still working on it

// afterEach(cleanup);

// it("fetches and displays data", async () => {
//     axiosMock.get.mockResolvedValueOnce({content: { quote: "Hello there"}});

//     const {getByTestId} = render(<Quotes/>)

//     const resolvedh1 = await waitForElement(() =>
//     getByTestId("quotes"))

//     expect(getByTestId('title')).toHaveTextContent('Quote of the day:')
//     expect(axiosMock.get).toHaveBeenCalledTimes(1);
// });
