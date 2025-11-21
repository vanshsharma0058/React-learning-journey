import { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [theme, settheme] = useState("light");
  return (
    <div>
      <h1>Theme is {theme}</h1>
      <Navbar theme={theme} settheme={settheme} />
    </div>
  );
};

export default App;
