import React from "react";
import { Preloader, Row } from "react-materialize";

const DataLoader = () => {
  return (
    <Row className="loader-wrapper center-align">
      <Preloader active color="blue" flashing />
    </Row>
  );
};

export default DataLoader;
