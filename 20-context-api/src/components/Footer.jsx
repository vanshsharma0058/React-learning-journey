import React from "react";
import { useNavigate } from "react-router-dom";
const Nav2 = () => {
  const navigate = useNavigate();

  return (
    <div className="footer">
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Return to Home Page
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Nav2;
