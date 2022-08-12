import React from "react";
import { screen, render } from "@testing-library/react";
import Hub from "../Hub";
import { BrowserRouter as Router } from "react-router-dom";

describe("hub", () => {
  beforeEach(() => {
    render(
      <Router>
        <Hub />
      </Router>
    );
  });

  test("Displays the text", () => {
    const heading = screen.getByRole("h1");
    expect(heading.textContent).toBe("");
  });
});
