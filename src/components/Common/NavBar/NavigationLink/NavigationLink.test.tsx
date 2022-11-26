import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { NavigationLink } from "./NavigationLink";

describe("Navigation Link Component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <NavigationLink label="Testing Label" to="/testing-link" type="link" />
      </BrowserRouter>
    );
  });

  test("Label rendered correctly", () => {
    const label = screen.getByText(/Testing Label/i);
    expect(label).toBeInTheDocument;
  });

  test("Link is correct", () => {
    const label = screen.getByText(/Testing Label/i);
    expect(label).toHaveAttribute("href", "/testing-link");
  });

  test("Should redirect to new tab and item should have active class", () => {
    const label = screen.getByText(/Testing Label/i);
    fireEvent(
      label,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(window.location.pathname).toBe("/testing-link");
    expect(label).toHaveClass("active");
  });
});
