import React, { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";
import Year from "./year/Year";
import Month from "./month/Month";
import Controls from "./Controls";
import AddButton from "../../AddButton";

const Calendar = () => {
  const { period } = useContext(ThemeContext);

  return (
    <>
      {period === "year" && <Controls />}
      <div className={period !== "year" ? "hide" : ""}>
        <Year />
      </div>
      <div className={period !== "month" ? "hide" : ""}>
        <Month />
      </div>
      <Controls />
      <AddButton />
    </>
  );
};

export default Calendar;
