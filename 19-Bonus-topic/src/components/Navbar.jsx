import React from "react";

const Navbar = (props) => {
  function changetheme() {
    props.settheme("Dark");
  }
  return (
    <div>
      <button onClick={changetheme}>Change theme</button>
    </div>
  );
};

export default Navbar;
