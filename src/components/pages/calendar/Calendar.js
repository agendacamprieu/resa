import React, { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";

const Calendar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <h1>{theme}</h1>
    </>
  );
};

export default Calendar;
