import React, { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";
import Year from "./year/Year";
import Month from "./month/Month";
import Controls from "./Controls";
import AddButton from "../../AddButton";

const Calendar = ({ events }) => {
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
      {/*<div style={{ marginTop: "30px" }}>*/}
      <Controls />
      {/*</div>*/}
      <AddButton />
    </>
  );
};

export default Calendar;
