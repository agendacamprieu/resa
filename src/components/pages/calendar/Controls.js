import React, { useContext } from "react";
import { Button, Icon, Row } from "react-materialize";
import moment from "moment";
import ThemeContext from "../../../context/ThemeContext";
import { useLocation } from "react-router-dom";

const Controls = () => {
  const { period, currentDate, setCurrentDate } = useContext(ThemeContext);
  const newDate = moment({ ...currentDate });

  const location = useLocation();

  return location.pathname !== "/reservations" ? (
    <Row className="center-align controls" style={{ marginRight: "25px" }}>
      <Button
        className="teal darken-1"
        onClick={() => setCurrentDate(moment())}
      >
        Aujourd'hui
      </Button>
      <Button
        className="teal darken-1"
        style={{ marginLeft: "25px", marginRight: "5px" }}
        onClick={() => setCurrentDate(newDate.subtract(1, period))}
      >
        <Icon style={{ height: "40px", lineHeight: "40px" }}>chevron_left</Icon>
      </Button>
      <Button
        className="teal darken-1"
        onClick={() => setCurrentDate(newDate.add(1, period))}
      >
        <Icon style={{ height: "40px", lineHeight: "40px" }}>
          chevron_right
        </Icon>
      </Button>
    </Row>
  ) : null;
};

export default Controls;
