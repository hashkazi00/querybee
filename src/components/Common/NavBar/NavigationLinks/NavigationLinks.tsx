import { TNavbarConfig } from "../Navbar.types";
import { NavigationDropdown } from "../NavigationDropdown/NavigationDropdown";
import { NavigationLink } from "../NavigationLink/NavigationLink";

import "./NavigationLinks.scss";

/**
 * Renders a list of navigation links.
 */
export const NavigationLinks = ({ links }: { links?: TNavbarConfig[] }) => {
  return (
    <ul className="navigation-links">
      {links &&
        links.map((link) => {
          if (link.type === "link") {
            return <NavigationLink {...link} key={link.label} />;
          } else if (link.type === "dropdown") {
            return (
              <NavigationDropdown
                key={link.label}
                links={link.links}
                label={link.label}
              />
            );
          }
        })}
    </ul>
  );
};
