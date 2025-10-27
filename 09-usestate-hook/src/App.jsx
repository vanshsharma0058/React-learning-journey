import { useState } from "react";

const App = () => {
  const [num, setnum] = useState(0);
  function increase() {
    setnum((num) => num + 1);
  }
  function decrease() {
    setnum((num) => Math.max(0, num - 1));
  }
  function reset() {
    setnum(0);
  }
  return (
    <div>
      <h1>Counter Project Practice</h1>
      <div className="counter">{num}</div>
      <button onClick={increase}>Increase+</button>
      <button onClick={decrease}>Decrease-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default App;
