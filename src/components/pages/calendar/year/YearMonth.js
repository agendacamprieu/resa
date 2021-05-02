import React, { useContext } from "react";
import { Col } from "react-materialize";
import ThemeContext from "../../../../context/ThemeContext";
import range from "../../utils/range";
import YearMonthDay from "./YearMonthDay";
import moment from "moment";
import YearSmallDays from "./YearSmallDays";

const YearMonth = ({ month }) => {
  const { currentDate } = useContext(ThemeContext);
  const days = range(
    moment({ ...currentDate })
      .month(month)
      .daysInMonth(),
    1
  );

  return (
    <Col className="month" s={12} m={3}>
      <h4
        className={
          moment().format("MMMM") === month &&
          currentDate.year() === moment().year()
            ? "capitalize teal-text"
            : "capitalize"
        }
      >
        {month}
      </h4>
      <YearSmallDays month={month} />
      <div className="month-days">
        {days.map((day, index) => (
          <YearMonthDay month={month} day={day} key={index} />
        ))}
      </div>
    </Col>
  );
};

export default YearMonth;
