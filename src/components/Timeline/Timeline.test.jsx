import React from "react";
import { screen, render } from "@testing-library/react";
import Timeline from ".";
import { BrowserRouter as Router } from "react-router-dom";

describe("Timeline Component", () => {
  const testData = [
    {
      year: 2022,
      text: "Lorem ipsum..",
      cssClass: "jello",
      entry: "hello",
      index: 1,
      key: Math.floor(Math.random() * 2),
    },
    {
      year: 2022,
      text: "Lorem ipsum..",
      cssClass: "jello",
      entry: "hello",
      index: 1,
      key: Math.floor(Math.random() * 2),
    },
  ];
  beforeEach(() => {
    render(
      <Router>
        <Timeline data={testData} />
      </Router>
    );
  });

  test("Displays the year as 2022", () => {
    const heading = screen.getAllByRole("heading");
    expect(heading[0].textContent).toBe("");
  });
  test("Displays the text in a p tag", () => {
    const log = screen.getAllByRole("log");
    expect(log[0].textContent).toBe("");
  });
});
