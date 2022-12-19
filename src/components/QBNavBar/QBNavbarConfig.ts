import { TNavbarConfig } from "../Common/NavBar/Navbar.types";

export const QBNavbarConfig: TNavbarConfig[] = [
  {
    to: "/new-query",
    label: "New Query",
    type: "link",
    openInNewTab: false,
  },
  {
    to: "/queries",
    label: "All Queries",
    type: "dropdown",
    links: [
      {
        to: "/queries/all_customers",
        label: "All Customers",
        type: "link",
      },
      {
        to: "/queries/all_employees",
        label: "All Employees",
        type: "link",
      },
    ],
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
