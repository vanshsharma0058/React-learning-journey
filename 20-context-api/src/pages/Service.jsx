import React from "react";
import { Link, Outlet } from "react-router-dom";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Service = () => {
  return (
    <div className="services">
      <Link to="/Services/frontend" element={<Frontend />}>
        Frontend Services
      </Link>
      <Link to="/Services/backend" element={<Backend />}>
        Backend Services
      </Link>
      <Outlet />
    </div>
  );
};

export default Service;
