import React, { useState } from "react";
import ThemeContext from "../ThemeContext";

const ThemeContextProvider = ({ children }) => {
  const [period, setPeriod] = useState("month");
  const value = { period, setPeriod };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
