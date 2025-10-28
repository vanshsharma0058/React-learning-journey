import React, { useState } from "react";

const App = () => {
  // const [num, setnum] = useState({ user: "Sarthak", age: 20 });

  // const btnclicked = () => {
  //   const newnum = { ...num };
  //   newnum.user = "Vansh";
  //   setnum(newnum);
  // };

  // const [num, setnum] = useState([10, 20, 30]);
  // const btnclicked = () => {
  //   const newnum = [...num];
  //   newnum.push(99);
  //   setnum(newnum);
  // };

  const [num, setnum] = useState({ user: "Sarthak", age: 20 });
  const btnclicked = () => {
    setnum((perv) => ({ ...num, age: 50 }));
  };

  return (
    <div>
      <h1>
        {num.user},{num.age}
      </h1>
      <button onClick={btnclicked}>click</button>
    </div>
  );
};

export default App;
