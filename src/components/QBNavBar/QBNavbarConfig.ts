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
    to: "/dthis-is-a-link-too-right-ghi",
    label: "Tables",
    type: "link",
    openInNewTab: false,
  },
  {
    to: "/rthis-is-a-dropdown",
    label: "Dropdown",
    type: "dropdown",
    links: [
      {
        to: "/ethis-is-a-link-tooimean",
        label: "Link 2",
        type: "link",
      },
      {
        to: "/enthis-is-a-link-nafdfg",
        label: "Link 3",
        type: "link",
      },
    ],
  },
];
