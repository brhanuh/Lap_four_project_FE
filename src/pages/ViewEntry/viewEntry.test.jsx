import React from "react";
import { screen, render } from "@testing-library/react";
import ViewEntry from ".";
import { MemoryRouter } from "react-router-dom";
import routeData from "react-router";

describe("View Entry Page", () => {
  beforeEach(() => {
    render(
      <MemoryRouter
        initialEntries={[
          {
            pathname: "timeline/entry",
            state: {
              index: 1,
              entry: {
                appetatite: 2,
                class: "timelineContainer right",
                concentration: 3,
                date_posted: "10-08-2022",
                day: "Wednesday",
                depression: 1,
                diet: "pizza",
                energy: 3,
                enter: "netflix",
                id: 1,
                irritability: 5,
                mood: 5,
                motivation: 2,
                social: "FB",
                stress: 3,
                time: "11-25",
                user: "get_jwt_identity()",
                week: "32",
              },
            },
          },
        ]}
      >
        <ViewEntry />
      </MemoryRouter>
    );
  });

  test("Displays the text", () => {
    const heading = screen.getByRole("back");
    expect(heading.textContent).toBe("Back");
  });
});
