import React, { useContext } from "react";
import ThemeContext from "../../../../context/ThemeContext";
import moment from "moment";
import DateContext from "../../../../context/DateContext";

const YearMonthDay = ({ month, day }) => {
  const { currentDate } = useContext(ThemeContext);
  const { events } = useContext(DateContext);

  const isToday = () => {
    return moment({
      year: currentDate.year(),
      month: parseInt(moment().month(month).format("MM")) - 1,
      day: day,
    }).isSame(moment(), "day");
  };

  const isReserved = () => {
    const result = events.find((resa) =>
      moment({
        year: currentDate.year(),
        month: parseInt(moment().month(month).format("MM")) - 1,
        day: day,
      }).isBetween(
        moment(resa.datebegin).subtract("1", "day"),
        moment(resa.dateend)
      )
    );
    return result;
  };

  const getClassNameToday = () => {
    if (isToday()) {
      if (day >= 10) {
        return "day-today double-number";
      } else {
        return "day-today";
      }
    } else if (isReserved() !== undefined) {
      if (day >= 10) {
        return "day-reserved double-number";
      } else {
        return "day-reserved";
      }
    } else {
      return "";
    }
  };

  return (
    <div className="day">
      <div className={getClassNameToday()}>{day}</div>
    </div>
  );
};

export default YearMonthDay;
