import React, { createContext, useState } from "react";

export const themecontextdata = createContext();
const ThemeContext = (props) => {
  const [theme, settheme] = useState("light");
  return (
    <div>
      <themecontextdata.Provider value={[theme, settheme]}>
        {props.children}
      </themecontextdata.Provider>
    </div>
  );
};

export default ThemeContext;
