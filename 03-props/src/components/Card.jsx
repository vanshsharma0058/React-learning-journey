import React from "react";

const Card = (props) => {
  //   console.log(props);  it give object {name: 'Vansh'}
  return (
    <div className="parent">
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1662569147750-ef722928ce08?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1480"
          alt=""
        />
        <h1>
          {props.name} and {props.age} year old
        </h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        <button>View Profile</button>
      </div>
    </div>
  );
};

export default Card;
