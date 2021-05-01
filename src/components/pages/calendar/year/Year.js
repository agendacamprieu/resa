import React, { useContext } from "react";
import moment from "moment";
import YearMonth from "./YearMonth";
import { Row } from "react-materialize";
import ThemeContext from "../../../../context/ThemeContext";

const Year = () => {
  const { currentDate } = useContext(ThemeContext);

  return (
    <div>
      <h4>
        <strong>{currentDate.year()}</strong>
      </h4>
      <Row>
        {moment.months().map((month, index) => (
          <YearMonth month={month} key={index} />
        ))}
      </Row>
    </div>
  );
};

export default Year;
