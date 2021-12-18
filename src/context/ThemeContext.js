import React from "react";
import moment from "moment";

const ThemeContext = React.createContext({
  period: "year",
  currentDate: moment().date(1),
  setTheme: () => {},
});

export default ThemeContext;
