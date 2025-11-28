import React, { useState } from "react";
import UseMemo from "./UseMemo";

const ReactMemo = () => {
  const [count, setcount] = useState(0);
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setcount((prev) => prev + 1)}>Increment</button>
      </div>
      <UseMemo />
    </>
  );
};

export default ReactMemo;
