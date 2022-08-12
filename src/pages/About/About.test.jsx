import React from "react";
import { screen, render } from "@testing-library/react";
import About from "../About";
import { BrowserRouter as Router } from "react-router-dom";

describe("About", () => {
  beforeEach(() => {
    render(
      <Router>
        <About />
      </Router>
    );
  });

  test("Displays the text", () => {
    const heading = screen.getByRole("heading");
    expect(heading.textContent).toBe("About page");
  });
});
