import "./App.scss";
import QBLogo from "./static/icons/main-logo.png";
import { Navbar } from "./components/Common/NavBar/Navbar";
import { QBNavbarConfig } from "./components/QBNavBar/QBNavbarConfig";

function App() {
  return (
    <Navbar heading="QUERY BEE" logo={QBLogo} navbarConfig={QBNavbarConfig} />
  );
}

export default App;
