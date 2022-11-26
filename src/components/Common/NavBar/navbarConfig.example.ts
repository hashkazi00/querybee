import { TNavbarConfig } from "./Navbar.types";

export const navbarConfig: TNavbarConfig[] = [
  {
    to: "/this-is-a-link",
    label: "Link",
    type: "link",
    openInNewTab: true,
  },
  // WIP: We don't need it at the moment, kept the footprint ready for future usecase.
  // {
  //   to: "/this-is-a-dropdown",
  //   label: "Dropdown",
  //   type: "dropdown",
  //   links: [
  //     {
  //       to: "/this-is-a-link",
  //       label: "Link",
  //       type: "link",
  //     },
  //   ],
  // },
];
