import React, { useEffect, useState } from "react";
import { useEasybase } from "easybase-react";
import { Col, Preloader, Row } from "react-materialize";
import Reservation from "./Reservation";

const ListReservations = () => {
  const [isLoading, setIsloading] = useState(false);
  const { Frame, sync, configureFrame } = useEasybase();

  useEffect(() => {
    (async () => {
      setIsloading(true);
      await configureFrame({ tableName: "RESERVATION", limit: 10 });
      await sync();
      setIsloading(false);
    })();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return isLoading ? (
    <Row>
      <Col s={4} className="center-align">
        <Preloader active color="blue" flashing />
      </Col>
    </Row>
  ) : (
    <Row>
      {Frame().map((resa, index) => (
        <Col m={6} s={12} key={index}>
          <Reservation reservation={resa} index={index} />
        </Col>
      ))}
    </Row>
  );
};

export default ListReservations;
