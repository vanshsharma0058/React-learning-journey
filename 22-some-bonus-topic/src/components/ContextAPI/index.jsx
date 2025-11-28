import React, { createContext, useContext } from "react";

export const Biodata = createContext(); //createontext return a context component,not a variable
const Index = (props) => {
  const myname = "vansh";
  const age = 21;
  return (
    <div>
      <Biodata.Provider value={{ myname, age }}>
        {props.children}
      </Biodata.Provider>
    </div>
  );
};

//custom hooks
export const useBioContext = () => {
  const context = useContext(Biodata);
  if (context === "undefined")
    throw new Error("Component must be wrapped with BioProvider");
  return context;
};

export default Index;
