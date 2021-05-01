import React, { useContext } from "react";
import { Col } from "react-materialize";
import moment from "moment";
import ThemeContext from "../../../../context/ThemeContext";

const MonthDay = ({ day }) => {
  const { currentDate } = useContext(ThemeContext);

  const isToday = () => {
    return moment({
      year: currentDate.year(),
      month: parseInt(currentDate.format("MM")) - 1,
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
    <Col className="month-days" s={2}>
      <div className={getClassNameToday()}>{day}</div>
    </Col>
  );
};

export default MonthDay;
