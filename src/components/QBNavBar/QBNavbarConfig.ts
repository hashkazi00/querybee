import { TNavbarConfig } from "../Common/NavBar/Navbar.types";

export const QBNavbarConfig: TNavbarConfig[] = [
  {
    to: "/athis-is-a-link-abc",
    label: "New Query",
    type: "link",
    openInNewTab: false,
  },
  {
    to: "/sthis-is-a-link-too-def",
    label: "All Queries",
    type: "link",
    openInNewTab: false,
  },
  {
    to: "/tables",
    label: "Tables",
    type: "dropdown",
    links: [
      {
        to: "/tables/customers",
        label: "Customers",
        type: "link",
      },
      {
        to: "/tables/employees",
        label: "Employees",
        type: "link",
      },
    ],
  },
];
