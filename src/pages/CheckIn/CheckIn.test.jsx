import React from "react";
import { screen, render } from "@testing-library/react";
import CheckIn from "../CheckIn";
import { BrowserRouter as Router } from "react-router-dom";

describe("Checkin", () => {
  beforeEach(() => {
    render(
      <Router>
        <CheckIn />
      </Router>
    );
  });

  // test("Displays the text", () => {
  //   const heading = screen.getByRole("h1");
  //   expect(heading.textContent).toBe("This is the check in page");
  // });
});
