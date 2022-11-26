import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { NavigationLinks } from "./NavigationLinks";
import { navbarConfig } from "../navbarConfig.example";

describe("Navigation Link Component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <NavigationLinks links={navbarConfig} />
      </BrowserRouter>
    );
  });

  test("Renders as many links as present in config", () => {
    const links = screen.getAllByRole("link");
    expect(links.length).toBe(navbarConfig.length);
  });
});
