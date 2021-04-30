import React, { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";

const Calendar = ({ events }) => {
  const { period } = useContext(ThemeContext);
  return (
    <>
      <h1>{period}</h1>
    </>
  );
};

export default Calendar;
