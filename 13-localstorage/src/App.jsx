import React from "react";

const App = () => {
  // localStorage.setItem("user", "vansh");

  // Store object
  const user = {
    name: "vansh",
    age: 18,
    city: "Bhopal",
  };

  // I am try to store the object in localstorage,I need to convert this object to string

  localStorage.setItem("user", JSON.stringify(user));

  // I retrieve the object data
  const data = localStorage.getItem("user");
  const parse = JSON.parse(data);
  console.log(parse.age);

  return <div>App</div>;
};

export default App;
