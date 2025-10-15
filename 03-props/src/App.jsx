import React from "react";
import Card from "./components/card";

const App = () => {
  return (
    <div className="parent">
      <Card name="Vansh" age={19} />
      <Card name="Anmol" age={15} />
    </div>
  );
};

export default App;
