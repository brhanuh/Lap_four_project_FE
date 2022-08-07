import React from "react";
import { screen, render } from "@testing-library/react";
import Timeline from ".";

describe("Timeline Page", () => {
  beforeEach(() => {
    render(<Timeline />);
  });

  test("Displays loading page", () => {
    const heading = screen.getByRole("heading");
    expect(heading.textContent).toBe("Loading");
  });

  describe("Renders timelines when loading is finished", () => {
    beforeEach(() => {
      render(<Timeline />);
    });
    test("displays heading", async () => {
      setTimeout(function () {
        // expect something that's available after the timeout
        const heading = screen.getByRole("heading");
        expect(heading.textContent).toBe("Lading");
        done();
      }, 10500);
    });
  });
});
