import React from "react";
import { screen, render } from "@testing-library/react";
import Timeline from ".";

describe("Timeline Component", () => {
  beforeEach(() => {
    render(<Timeline />);
  });

  test("Displays the year as 2022", () => {
    const heading = screen.getAllByRole("heading");
    expect(heading[0].textContent).toBe("2022");
  });
  test("Displays the text in a p tag", () => {
    const log = screen.getAllByRole("log");
    expect(log[0].textContent).toBe("Lorem ipsum..");
  });
});
