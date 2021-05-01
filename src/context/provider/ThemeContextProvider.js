import React, { useState } from "react";
import ThemeContext from "../ThemeContext";
import moment from "moment";

const ThemeContextProvider = ({ children }) => {
  const [period, setPeriod] = useState("month");
  const [currentDate, setCurrentDate] = useState(moment());
  const value = { period, setPeriod, currentDate, setCurrentDate };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
