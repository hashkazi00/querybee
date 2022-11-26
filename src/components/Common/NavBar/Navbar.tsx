import "./Navbar.scss";
import { TNavbarConfig } from "./Navbar.types";
import { NavigationLinks } from "./NavigationLinks/NavigationLinks";

interface INavbar {
  logo: string;
  heading: string;
  navbarConfig?: TNavbarConfig[];
}

/**
 * Renders the Top Navbar.
 */
export const Navbar = ({ logo, heading, navbarConfig }: INavbar) => {
  return (
    <nav aria-labelledby="top-navigation-bar" className="navbar">
      <div className="navbar-header-container">
        <img src={logo} alt="orangehealth logo" className="navbar-logo" />
        <h1 className="navbar-heading">{heading}</h1>
      </div>
      <NavigationLinks links={navbarConfig} />
    </nav>
  );
};
