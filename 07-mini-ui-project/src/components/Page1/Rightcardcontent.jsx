import React from "react";

const Rightcardcontent = (props) => {
  return (
    <div className="absolute top-0 left-0 p-7 flex flex-col justify-between h-full w-full ">
      <h2 className="bg-white h-11 w-11 text-2xl font-semibold flex justify-center items-center rounded-full">
        {props.id + 1}
      </h2>
      <div>
        <p className="text-lg leading-[1.1] shadow-2xl text-white mb-10  ">
          {props.intro}
        </p>
        <div className="flex justify-between mt-4">
          <button
            style={{ backgroundColor: props.color }}
            className=" text-white font-semibold px-7 py-2 rounded-full"
          >
            {props.tag}
          </button>
          <button
            style={{ backgroundColor: props.color }}
            className=" text-white font-semibold px-4 py-2 rounded-full"
          >
            <i class="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightcardcontent;
