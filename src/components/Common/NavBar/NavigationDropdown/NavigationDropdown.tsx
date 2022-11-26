import { useState } from "react";
import { ICommonNavbarConfig } from "../Navbar.types";
import { NavLink, useLocation } from "react-router-dom";
// import { ICommonNavbarLink } from "../Navbar.types";
import "./NavigationDropdown.scss";
import { useClickOutside } from "../../../../hooks/useClickOutside";

export const NavigationDropdown = ({
  label,
  links,
}: {
  label: string;
  links: ICommonNavbarConfig[];
}) => {
  const [isDropdownOpen, updateIsDropdownOpen] = useState<boolean>(false);
  const location = useLocation();

  const openCloseDropDown = () => {
    updateIsDropdownOpen((prevState) => !prevState);
  };

  const dropdownRef = useClickOutside({
    callback: () => updateIsDropdownOpen(false),
  });

  const dropdownMenu = () => {
    const dropdownLinks = links.map((link) => {
      return (
        <li key={link.label} className="nav-dropdown-link">
          <NavLink
            to={link.to}
            target={link.openInNewTab ? "_blank" : "_self"}
            rel={link.openInNewTab ? "noreferrer noopener" : undefined}
            className="nav-dropdown-anchor"
          >
            {link.label}
          </NavLink>
        </li>
      );
    });

    return <ul className="nav-dropdown">{dropdownLinks}</ul>;
  };
  return (
    <div className="dropdown-navigation-link">
      <div
        className={
          "dropdown-navigation-link-label " +
          (isDropdownOpen ? "active " : "") +
          (links.findIndex((link) => link.to === location.pathname) >= 0
            ? "highlight"
            : "")
        }
        ref={dropdownRef}
        onClick={openCloseDropDown}
      >
        {label}
      </div>
      {dropdownMenu()}
    </div>
  );
};
