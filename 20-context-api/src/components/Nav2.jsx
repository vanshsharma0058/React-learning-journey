import React, { useContext } from "react";
import { themecontextdata } from "../context/ThemeContext";
import { Link } from "react-router-dom";
const Nav2 = () => {
  const [theme, settheme] = useContext(themecontextdata);

  return (
    <div className="nav2">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Services">Service</Link>
      <Link to="/Contact">Contact</Link>

      <button
        onClick={() => settheme(theme === "light" ? "dark" : "light")}
        className="toggle"
      >
        {theme}
      </button>
    </div>
  );
};

export default Nav2;
