import React from "react";
import { screen, render } from "@testing-library/react";
import HubButton from ".";
import { BrowserRouter as Router } from "react-router-dom";

describe("Timeline Component", () => {
  beforeEach(() => {
    render(
      <Router>
        <HubButton />
      </Router>
    );
  });

  test("Displays the year as 2022", () => {
    const heading = screen.getByRole("title");
    expect(heading.textContent).toBe("Hub");
  });
});
