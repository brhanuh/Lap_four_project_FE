import React from "react";
import { screen, render } from "@testing-library/react";
import Entry from ".";

describe("Entry Component", () => {
  beforeEach(() => {
    render(
      <Entry
        year={2021}
        text={"Hello World!"}
        cssClass={"timelineContainer right"}
      />
    );
  });

  test("Displays the year as 2021", () => {
    const heading = screen.getByRole("heading");
    expect(heading.textContent).toBe("2021");
  });
  test("Displays the text in a p tag", () => {
    const heading = screen.getByRole("log");
    expect(heading.textContent).toBe("Hello World!");
  });
});
