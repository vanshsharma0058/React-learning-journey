import React from "react";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-between px-22 py-8 ">
      <h4 className="bg-black text-white tracking-wider uppercase px-6 py-2 rounded-full">
        Target Audience
      </h4>
      <button className="bg-white rounded-full tracking-wider uppercase px-5 py-2 text-sm">
        Digital Banking Platform
      </button>
    </div>
  );
};

export default Navbar;
