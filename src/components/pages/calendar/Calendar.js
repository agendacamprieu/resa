import React, { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";
import Year from "./year/Year";
import Month from "./month/Month";
import { Button, Row } from "react-materialize";
import moment from "moment";

const Calendar = ({ events }) => {
  const { period, currentDate, setCurrentDate } = useContext(ThemeContext);

  const newDate = moment({ ...currentDate });

  return (
    <>
      <Row>
        <Button onClick={() => setCurrentDate(moment())}>Aujourd'hui</Button>
        <div className="right">
          <Button onClick={() => setCurrentDate(newDate.subtract(1, period))}>
            {"<"}
          </Button>
          <Button onClick={() => setCurrentDate(newDate.add(1, period))}>
            {">"}
          </Button>
        </div>
      </Row>
      <div className={period !== "year" ? "hide" : ""}>
        <Year />
      </div>
      <div className={period !== "month" ? "hide" : ""}>
        <Month />
      </div>
    </>
  );
};

export default Calendar;
