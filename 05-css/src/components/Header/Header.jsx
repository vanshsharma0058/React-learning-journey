import React from "react";
import head from "./Header.module.css";
const Header = () => {
  return (
    <div className={head.header}>
      <h3>Adobe</h3>
      <button className={head.btn}>login</button>
    </div>
  );
};

export default Header;
