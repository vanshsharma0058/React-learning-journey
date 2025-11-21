import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center bg-cyan-500 py-4 px-8 ">
        <h3 className="text-2xl font-bold">Seryains</h3>
        <div className="flex gap-8">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Trends">Trends</Link>
          <Link to="/Contact">Product</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
