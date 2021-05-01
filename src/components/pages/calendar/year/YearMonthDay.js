import React, { useContext } from "react";
import ThemeContext from "../../../../context/ThemeContext";
import moment from "moment";

const YearMonthDay = ({ month, day }) => {
  const { currentDate } = useContext(ThemeContext);

  const isToday = () => {
    return moment({
      year: currentDate.year(),
      month: parseInt(moment().month(month).format("MM")) - 1,
      day: day,
    }).isSame(moment(), "day");
  };

  const getClassNameToday = () => {
    if (isToday()) {
      if (day >= 10) {
        return "day-today double-number";
      } else {
        return "day-today";
      }
    } else {
      return "";
    }
  };

  return (
    // <Col className="month" s={1}>
    //   <div className={getClassNameToday()}>{day}</div>
    // </Col>
    <div className="day">
      <div className={getClassNameToday()}>{day}</div>
    </div>
  );
};

export default YearMonthDay;
