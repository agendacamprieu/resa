import React, { useContext } from "react";
import moment from "moment";
import ThemeContext from "../../../../context/ThemeContext";

const YearSmallDays = ({ month }) => {
  const { currentDate } = useContext(ThemeContext);

  let smallDays = ["l", "m", "m", "j", "v", "s", "d"];

  const getFirstDayOfMonth = () => {
    return moment({ ...currentDate })
      .month(month)
      .weekday() === 0
      ? 7
      : moment({ ...currentDate })
          .month(month)
          .weekday();
  };

  const firstDayOfMonth = getFirstDayOfMonth();
  smallDays = smallDays
    .slice(firstDayOfMonth - 1, smallDays.length)
    .concat(smallDays.slice(0, firstDayOfMonth - 1));

  return (
    <div className="header-small-days">
      {smallDays.map((day, index) => (
        <div key={index} className="year-day">
          {day}
        </div>
      ))}
    </div>
  );
};

export default YearSmallDays;
