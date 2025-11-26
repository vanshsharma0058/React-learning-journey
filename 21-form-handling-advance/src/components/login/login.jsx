import React, { useState } from "react";
import "./login.css";
const Login = () => {
  const [userlogin, setuserlogin] = useState({
    username: "",
    password: "",
    message: "",
  });

  const logininput = (e) => {
    const { name, value } = e.target;
    setuserlogin((prev) => ({ ...prev, [name]: value }));
  };
  const loginformsubmit = (e) => {
    e.preventDefault();
    console.log(userlogin);
    setuserlogin({ username: "", password: "", message: "" });
  };
  return (
    <div className="loginform">
      <div className="form">
        <h1 className="heading">Contact Form</h1>
        <form onSubmit={loginformsubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={userlogin.username}
              onChange={logininput}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={userlogin.password}
              onChange={logininput}
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <input
              type="text"
              id="message"
              name="message"
              value={userlogin.message}
              onChange={logininput}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
