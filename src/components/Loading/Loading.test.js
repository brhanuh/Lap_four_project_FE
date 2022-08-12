import React from "react";
import { screen, render } from "@testing-library/react";
import Loading from ".";

describe("Loading Component", () => {
  beforeEach(() => {
    render(<Loading setLoading={true} />);
  });

  test("Displays the heading", () => {
    const heading = screen.getByRole("heading");
    expect(heading.textContent).toBe("Take a deep breath...");
  });
});
