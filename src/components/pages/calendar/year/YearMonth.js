import React, { useContext } from "react";
import { Col } from "react-materialize";
import ThemeContext from "../../../../context/ThemeContext";

const YearMonth = ({ month }) => {
  const { currentDate } = useContext(ThemeContext);
  const currentMonth = currentDate.format("MMMM");
  return (
    <Col className="month" s={3}>
      <h4
        className={
          currentMonth === month ? "capitalize teal-text" : "capitalize"
        }
      >
        {month}
      </h4>
      <div className="month-days"></div>
    </Col>
  );
};

export default YearMonth;
