import React, { useContext } from "react";
import { Button, Icon, Row } from "react-materialize";
import moment from "moment";
import ThemeContext from "../../../context/ThemeContext";

const Controls = () => {
  const { period, currentDate, setCurrentDate } = useContext(ThemeContext);

  const newDate = moment({ ...currentDate });
  return (
    <Row className="center-align" style={{ marginTop: "30px" }}>
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
        <Icon>chevron_left</Icon>
      </Button>
      <Button
        className="teal darken-1"
        onClick={() => setCurrentDate(newDate.add(1, period))}
      >
        <Icon>chevron_right</Icon>
      </Button>
    </Row>
  );
};

export default Controls;
