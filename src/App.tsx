import "./App.scss";
import QBLogo from "./static/icons/main-logo.png";
import { Navbar } from "./components/NavBar/Navbar";

function App() {
  return <Navbar heading="QUERY BEE" logo={QBLogo} />;
}

export default App;
