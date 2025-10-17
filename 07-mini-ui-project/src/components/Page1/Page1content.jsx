import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1content = (props) => {
  return (
    <div className="pb-14 pt-6 px-18 flex justify-between gap-7 h-[90vh] ">
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  );
};

export default Page1content;
