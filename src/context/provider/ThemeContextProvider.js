import React, { useState } from "react";
import ThemeContext from "../ThemeContext";
import moment from "moment";

const ThemeContextProvider = ({ children }) => {
  const [period, setPeriod] = useState("year");
  const [currentDate, setCurrentDate] = useState(moment().date(1));
  const value = { period, setPeriod, currentDate, setCurrentDate };

  moment.locale("fr");

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
