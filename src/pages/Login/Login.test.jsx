/**
 * @jest-environment jsdom
 */

import React from 'react';
import { screen, render } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import Login from '.';

describe('login', () => {
  beforeEach(() => {
    render(<Login />);
  });

  //   test('Displays a button that navigates to home page', () => {
  //     const button = screen.getAllByRole('button')[0];
  //     expect(button).toBeInTheDocument();
  //   });

  test('Displays the text', () => {
    const heading = screen.getByRole('h1');
    expect(heading.textContent).toBe('Login');
  });
});
