import React from "react";
import { screen, render } from "@testing-library/react";
import Home from "../Home";
import { BrowserRouter as Router } from "react-router-dom";

describe("home", () => {
  beforeEach(() => {
    render(
      <Router>
        <Home />
      </Router>
    );
  });

  test("Displays the text", () => {
    const heading = screen.getByRole("day");
    expect(heading.textContent).toBe("Capture your whole day ➡");
  });
});
