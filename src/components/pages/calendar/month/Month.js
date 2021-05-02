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
  const weekdays = moment.weekdays(true);
  const weekdaysShort = moment.weekdaysShort(true);

  const getFirstDayOfMonth = () => {
    return moment({ ...currentDate })
      .month(month)
      .weekday() === 0
      ? 7
      : moment({ ...currentDate })
          .month(month)
          .weekday();
  };

  const getDaysOfMonth = () => {
    let days = [];
    const indexes = [7, 14, 21, 28, 35, 42];
    const daysOfMonth = range(currentDate.daysInMonth(), 1);
    const countPreviousMonth = moment({ ...currentDate })
      .month(month)
      .subtract(1, "month")
      .daysInMonth();
    const firstDayOfMonth = getFirstDayOfMonth();
    const daysOfPreviousMonth = range(
      firstDayOfMonth - 1,
      countPreviousMonth + 2 - firstDayOfMonth
    );
    const daysOfPreviousMonthFinal = daysOfPreviousMonth.map((day) => ({
      isInMonth: false,
      number: day,
    }));
    const daysOfMonthBefore = daysOfMonth.map((day) => ({
      isInMonth: true,
      number: day,
    }));
    const daysOfMonthFinal = daysOfPreviousMonthFinal.concat(daysOfMonthBefore);

    indexes.forEach((index, key) => {
      days[key] = daysOfMonthFinal.slice(index - 7, index);
    });

    return days;
  };

  const isToday = (day) => {
    return moment({
      year: currentDate.year(),
      month: parseInt(currentDate.format("MM")) - 1,
      day: day.number,
    }).isSame(moment(), "day");
  };

  const getClassNameToday = (day) => {
    let className = "";
    className += day.isInMonth ? "in-month" : "out-of-month";
    if (isToday(day)) {
      className += " day-today";
      if (day.number >= 10) {
        className += " double-number";
      }
    }
    return className;
  };

  const days = getDaysOfMonth();

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
            {weekdays.map((day, index) => (
              <th data-field="day" key={index} className="capitalize">
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
                  {day.number}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <Table className="centered hide-on-med-and-up">
        <thead>
          <tr>
            {weekdaysShort.map((day, index) => (
              <th data-field="day" key={index} className="capitalize">
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
                  {day.number}
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
