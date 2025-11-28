import React, { useId } from "react";

const ForwardRefinput = (props) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{props.label}</label>
      <input type="text" ref={props.ref} />
    </div>
  );
};

export default ForwardRefinput;
