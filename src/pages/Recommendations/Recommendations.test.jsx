import React from "react";
import { screen, render } from "@testing-library/react";
import Recommendations from "../Recommendations";
import { BrowserRouter as Router } from "react-router-dom";

describe("Recommendations", () => {
  beforeEach(() => {
    render(
      <Router>
        <Recommendations />
      </Router>
    );
  });

  //   test("Displays the text", () => {
  //     const heading = screen.getByRole("h1");
  //     expect(heading.textContent).toBe("This is the Recommendations page");
  //   });
});
