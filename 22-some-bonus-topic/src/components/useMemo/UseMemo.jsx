import React, { useRef } from "react";

const UseMemo = () => {
  const renderCount = useRef(0);
  console.log(renderCount);
  return (
    <div>
      <p>Nothing changed here {renderCount.current++} time(s)</p>
    </div>
  );
};

export default UseMemo;
