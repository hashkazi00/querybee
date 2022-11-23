import "./Navbar.scss";

interface INavbar {
  logo: string;
  heading: string;
}

/**
 * Renders the Top Navbar.
 */
export const Navbar = ({ logo, heading }: INavbar) => {
  return (
    <nav aria-labelledby="top-navigation-bar" className="navbar">
      <img src={logo} alt="orangehealth logo" className="navbar-logo" />
      <h1 className="navbar-heading">{heading}</h1>
    </nav>
  );
};
