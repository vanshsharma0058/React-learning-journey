import React from "react";
import { useNavigate } from "react-router-dom";
const Nav2 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between px-4 p-3">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-emerald-600 rounded-xl p-1 m-2 cursor-pointer active:scale-95"
      >
        Return to Home Page
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-emerald-600 rounded-2xl p-3 m-2 cursor-pointer active:scale-95"
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className="bg-emerald-600 rounded-2xl p-3 m-2 cursor-pointer active:scale-95"
      >
        Next
      </button>
    </div>
  );
};

export default Nav2;
