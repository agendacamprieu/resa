import React, { useContext } from "react";
// import MonthDay from "./MonthDay";
import range from "../../utils/range";
import { Table } from "react-materialize";
import ThemeContext from "../../../../context/ThemeContext";
import moment from "moment";

const Month = () => {
  const { currentDate } = useContext(ThemeContext);

  const month = currentDate.format("MMMM");
  const year = currentDate.year();

  let days = [];
  const indexes = [7, 14, 21, 28, 35];
  const daysOfMonth = range(currentDate.daysInMonth(), 1);
  indexes.forEach((index, key) => {
    days[key] = daysOfMonth.slice(index - 7, index);
  });

  const headerDays = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];

  const headerDaysSmall = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

  const isToday = (day) => {
    return moment({
      year: currentDate.year(),
      month: parseInt(currentDate.format("MM")) - 1,
      day: day,
    }).isSame(moment(), "day");
  };

  const getClassNameToday = (day) => {
    if (isToday(day)) {
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
    <div className="month-calendar">
      <h4 className="capitalize">
        <span
          className={
            month === moment().format("MMMM") &&
            currentDate.year() === moment().year()
              ? "amber-text"
              : "teal-text"
          }
        >
          <strong>{month}</strong>
        </span>{" "}
        {year}
      </h4>
      <Table className="centered hide-on-small-only">
        <thead>
          <tr>
            {headerDays.map((day, index) => (
              <th data-field="day" key={index}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {days.map((week, key) => (
            <tr key={key}>
              {week.map((day, index) => (
                <td className={getClassNameToday(day)} key={index}>
                  {day}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <Table className="centered hide-on-med-and-up">
        <thead>
          <tr>
            {headerDaysSmall.map((day, index) => (
              <th data-field="day" key={index}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {days.map((week, key) => (
            <tr key={key}>
              {week.map((day, index) => (
                <td className={getClassNameToday(day)} key={index}>
                  {day}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Month;
