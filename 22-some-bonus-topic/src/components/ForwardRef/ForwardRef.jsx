import React, { useId, useRef } from "react";

const ForwardRef = () => {
  const username = useRef(null);
  const password = useRef(null);

  const submit = (e) => {
    e.preventDefault();
    console.log(username.current.value);
    console.log(password.current.value);
  };
  return (
    <div>
      <form onSubmit={submit}>
        <ForwardRefinput label="username" ref={username} />
        <ForwardRefinput label="password" ref={password} />
        <button>submit</button>
      </form>
    </div>
  );
};

const ForwardRefinput = (props) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{props.label}</label>
      <input type="text" ref={props.ref} />
    </div>
  );
};

export default ForwardRef;
