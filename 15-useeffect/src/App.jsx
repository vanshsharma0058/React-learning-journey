import React, { useEffect, useState } from "react";

const App = () => {
  const [num, setnum] = useState(0);
  const [num2, setnum2] = useState(100);
  useEffect(
    function () {
      console.log("useeffect use karo");
    },
    [num]
  );

  return (
    <div>
      <h1>{num}</h1>
      <h1>{num2}</h1>
      <button
        onMouseEnter={() => setnum(num + 1)}
        onMouseLeave={() => setnum2(num2 + 10)}
      >
        clickme
      </button>
    </div>
  );
};

export default App;
