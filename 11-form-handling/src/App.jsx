import React, { useState } from "react";

const App = () => {
  // Two way binding

  const [title, settitle] = useState("");

  // Form handling
  const submithandler = (e) => {
    console.log("form is submit ", title);
    settitle("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submithandler(e);
        }}
      >
        <input
          type="text"
          placeholder="enter your name"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
