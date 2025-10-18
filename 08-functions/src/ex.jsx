import React from "react";

const App = () => {
  const pagescroll = (val) => {
    console.log("page scrolling speed", val);
  };

  return (
    // { <div>
    //   <input
    //     onChange={function (elem) {
    //       inputchange(elem.target.value);
    //     }}
    //     type="text"
    //     placeholder="enter name "
    //   />
    // </div>}
    // <div>
    //   <div
    //     onMouseMove={(elem) => {
    //       console.log(elem.clientX);
    //     }}
    //     className="box"
    //   ></div>
    // </div>

    <div
      onWheel={(elem) => {
        pagescroll(elem.deltaY);
      }}
    >
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  );
};

export default App;
