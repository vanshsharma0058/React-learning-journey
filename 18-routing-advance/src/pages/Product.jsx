import React from "react";
import Mens from "./Mens";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className="flex gap-4 py-4 justify-center">
        <Link className="bg-gray-500 text-center p-2 rounded" to="/Contact/Men">
          Men's Collection
        </Link>
        <Link
          className="bg-gray-500 text-center p-2 rounded"
          to="/Contact/Women"
        >
          Women's Collection
        </Link>
        <Link className="bg-gray-500 text-center p-2 rounded" to="/Contact/Kid">
          Kid's Collection
        </Link>
        {/* <h1 className="absolute top-[47%] left-[37%] text-3xl font-bold">
          This is product section
        </h1> */}
      </div>

      <Outlet />
    </div>
  );
};

export default Contact;
