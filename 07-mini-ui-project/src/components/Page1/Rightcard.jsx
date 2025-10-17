import React from "react";
import Rightcardcontent from "./Rightcardcontent";

const Rightcard = (props) => {
  return (
    <div className="h-full w-75 overflow-hidden  relative bg-sky-700 rounded-4xl shrink-0">
      <img className="h-full w-full object-cover" src={props.img} alt="image" />
      <Rightcardcontent
        id={props.id}
        intro={props.intro}
        tag={props.tag}
        color={props.color}
      />
    </div>
  );
};

export default Rightcard;
