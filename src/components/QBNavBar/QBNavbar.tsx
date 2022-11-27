import { Navbar } from "../Common/NavBar/Navbar";

import QBLogo from "../../static/icons/main-logo.png";
import { QBNavbarConfig } from "./QBNavbarConfig";

export const QBNavbar = () => {
  return (
    <Navbar logo={QBLogo} heading="Query Bee" navbarConfig={QBNavbarConfig} />
  );
};
