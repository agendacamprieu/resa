import React, { useEffect, useState } from "react";
import { useEasybase } from "easybase-react";
import { Col, Row } from "react-materialize";
import Reservation from "./Reservation";
import DataLoader from "../utils/DataLoader";
import AddButton from "../../AddButton";

const ListReservations = () => {
  const [isLoading, setIsloading] = useState(true);
  const { Frame, sync, configureFrame } = useEasybase();

  useEffect(() => {
    (async () => {
      setIsloading(true);
      await configureFrame({ tableName: "RESERVATION", limit: null });
      await sync();
      setIsloading(false);
    })();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return isLoading ? (
    <DataLoader />
  ) : (
    <>
      <Row>
        {Frame().map((resa, index) => (
          <Col m={6} s={12} key={index}>
            <Reservation reservation={resa} />
          </Col>
        ))}
      </Row>
      <AddButton />
    </>
  );
};

export default ListReservations;
