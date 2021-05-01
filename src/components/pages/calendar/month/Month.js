import React, { useContext } from "react";
import MonthDay from "./MonthDay";
import range from "../../utils/range";
import { Row } from "react-materialize";
import ThemeContext from "../../../../context/ThemeContext";
import moment from "moment";

const Month = () => {
  const { currentDate } = useContext(ThemeContext);

  const month = currentDate.format("MMMM");
  const year = currentDate.year();
  const days = range(currentDate.daysInMonth(), 1);

  return (
    <div>
      <h4 className="capitalize">
        <span className={month === moment().format("MMMM") ? "teal-text" : ""}>
          <strong>{month}</strong>
        </span>{" "}
        {year}
      </h4>
      <Row>
        {days.map((day, index) => (
          <MonthDay day={day} key={index} />
        ))}
      </Row>
    </div>
  );
};

export default Month;
