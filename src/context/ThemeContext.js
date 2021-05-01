import React from "react";
import moment from "moment";

const ThemeContext = React.createContext({
  period: "month",
  currentDate: moment(),
  setTheme: () => {},
});

export default ThemeContext;
