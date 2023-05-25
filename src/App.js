import { useState } from "react";
import "./App.css";
import Intro from "./Intro";
import NavBar from "./NavBar";
import ArbTable from "./ArbTable";

function App() {
  const [toggle, setToggle] = useState(false);

  const togglePage = () => {
    setToggle(!toggle);
  };

  return (
    <div className="App">
      <NavBar togglePage={togglePage} />
      {!toggle && <Intro togglePage={togglePage} />}
      {toggle && <ArbTable />}
    </div>
  );
}

export default App;
