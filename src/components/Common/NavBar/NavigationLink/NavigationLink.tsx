import { NavLink } from "react-router-dom";
import { ICommonNavbarConfig } from "../Navbar.types";

import "./NavigationLink.scss";

/**
 * Renders a anchor tag under a list item.
 */
export const NavigationLink = ({
  label = "Link",
  to,
  openInNewTab = false,
}: ICommonNavbarConfig) => {
  return (
    <li className="navigation-link">
      <NavLink
        to={to}
        target={openInNewTab ? "_blank" : "_self"}
        rel={openInNewTab ? "noreferrer noopener" : undefined}
        className="navigation-anchor"
      >
        {label}
      </NavLink>
    </li>
  );
};
