import React from "react";

const ThemeContext = React.createContext({
  period: "month",
  setTheme: () => {},
});

export default ThemeContext;
