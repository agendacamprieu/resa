import React, { useContext } from "react";
import { Col } from "react-materialize";
import ThemeContext from "../../../../context/ThemeContext";
import moment from "moment";

const YearMonthDay = ({ month, day }) => {
  const { currentDate } = useContext(ThemeContext);

  const isToday = () => {
    return (
      moment(
        currentDate.year() +
          "-" +
          moment().month(month).format("MM") +
          "-" +
          day
      ).format("YYYY-MM-DD") === moment().format("YYYY-MM-DD")
    );
  };

  // const isToday = () => {
  //   return moment({
  //     year: currentDate.year(),
  //     month: parseInt(moment().month(month).format("MM")),
  //     day: day,
  //   }).isSame(moment());
  // };

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
    <Col className="month" s={2}>
      <div className={getClassNameToday()}>{day}</div>
    </Col>
  );
};

export default YearMonthDay;
