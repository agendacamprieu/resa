import React from "react";

const ThemeContext = React.createContext({
  theme: "month",
  setTheme: () => {},
});

export default ThemeContext;
