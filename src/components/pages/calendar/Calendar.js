import React, { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";
import Year from "./year/Year";
import Month from "./month/Month";
import { Button, Icon, Row } from "react-materialize";
import moment from "moment";

const Calendar = ({ events }) => {
  const { period, currentDate, setCurrentDate } = useContext(ThemeContext);

  const newDate = moment({ ...currentDate });

  return (
    <>
      <Row className="center-align">
        <Button
          className="teal darken-1"
          onClick={() => setCurrentDate(moment())}
        >
          Aujourd'hui
        </Button>
        {/*<div className="right">*/}
        <Button
          className="teal darken-1"
          style={{ marginLeft: "25px", marginRight: "5px" }}
          onClick={() => setCurrentDate(newDate.subtract(1, period))}
        >
          <Icon>chevron_left</Icon>
        </Button>
        <Button
          className="teal darken-1"
          onClick={() => setCurrentDate(newDate.add(1, period))}
        >
          <Icon>chevron_right</Icon>
        </Button>
        {/*</div>*/}
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
