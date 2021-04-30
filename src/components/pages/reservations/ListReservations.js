import React, { useEffect } from "react";
import { useEasybase } from "easybase-react";
import moment from "moment";
import { Card, Col, Icon, Row, Switch } from "react-materialize";
import { Link } from "react-router-dom";
// import ShowDate from "../calendar/ShowDate";

const ListReservations = () => {
  const { Frame, sync, configureFrame } = useEasybase();

  useEffect(() => {
    configureFrame({ tableName: "RESERVATION", limit: 10 });
    sync();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Row>
      {Frame().map((resa, index) => (
        <Col m={6} s={12} key={index}>
          <Card
            actions={[
              <Link key="1" to={"/"}>
                Calendrier
              </Link>,
            ]}
            className="blue-grey darken-1"
            closeIcon={<Icon>close</Icon>}
            revealIcon={<Icon>more_vert</Icon>}
            textClassName="white-text"
            title={resa.username}
          >
            <Switch
              id={"switch-" + index}
              offLabel="En attente"
              onLabel="Vérifié"
              checked={resa.isconfirmed}
            />
            <p>
              {moment(resa.datebegin).format("DD MMMM YYYY")} ->{" "}
              {moment(resa.dateend).format("DD MMMM YYYY")}
            </p>
            {/*<ShowDate*/}
            {/*  date={moment(resa.datebegin).format("DD MMMM YYYY")}*/}
            {/*/>*/}
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ListReservations;
