import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <h3>Seryains</h3>
        <div className="sec">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Project">Project</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
