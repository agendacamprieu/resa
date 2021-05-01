import React from "react";
import { Col } from "react-materialize";

const MonthDay = ({ day }) => {
  return (
    <Col className="month" s={2}>
      <div className="capitalize">{day}</div>
    </Col>
  );
};

export default MonthDay;
