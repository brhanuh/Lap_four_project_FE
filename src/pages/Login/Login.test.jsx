/**
 * @jest-environment jsdom
 */

import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from ".";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

describe("login", () => {
  beforeEach(() => {
    render(
      <Router>
        <Login />
      </Router>
    );
  });

  //   test('Displays a button that navigates to home page', () => {
  //     const button = screen.getAllByRole('button')[0];
  //     expect(button).toBeInTheDocument();
  //   });

  test("Displays the text", () => {
    const heading = screen.getByRole("h1");
    expect(heading.textContent).toBe("Login");
  });
  test("form", async () => {
    const username = screen.findByPlaceholderText("Enter Username..");
    const password = screen.findByPlaceholderText("Enter Password..");
    console.log(password);
    const button = screen.findByRole("button");
    console.log(button);

    userEvent.type(username, "Beth");
    userEvent.type(password, "Beth");
    const data = {};
    axios.post.mockImplementationOnce(() => Promise.resolve(data));
    userEvent.click(button);

    await expect(fetchData("react")).resolves.toEqual(data);
  });
});
