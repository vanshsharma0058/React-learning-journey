import React, { useState } from "react";
import "./Signup.css";
const Signup = () => {
  const [input, setinput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phonenumber: "",
  });

  const handleinput = (e) => {
    const { name, value } = e.target;

    setinput((prev) => ({ ...prev, [name]: value }));
  };

  const submitform = (e) => {
    e.preventDefault();

    console.log(input);
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={submitform}>
        <h2>Create Account</h2>

        <div className="input-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstname"
            placeholder="Enter First Name"
            required
            value={input.firstname}
            onChange={handleinput}
          />
        </div>

        <div className="input-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastname"
            placeholder="Enter Last Name"
            required
            value={input.lastname}
            onChange={handleinput}
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            required
            value={input.email}
            onChange={handleinput}
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
            value={input.password}
            onChange={handleinput}
          />
        </div>

        <div className="input-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phonenumber"
            placeholder="Enter Phone Number"
            required
            value={input.phonenumber}
            onChange={handleinput}
          />
        </div>

        <button type="submit" className="submit-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
