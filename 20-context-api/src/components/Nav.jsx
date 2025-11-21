import React, { useContext } from "react";
import Nav2 from "./Nav2";
import { themecontextdata } from "../context/ThemeContext";

const Nav = () => {
  const [theme] = useContext(themecontextdata);
  return (
    <div className={theme}>
      <h1>Seryians</h1>
      <Nav2 />
    </div>
  );
};

export default Nav;
