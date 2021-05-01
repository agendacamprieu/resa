import React from "react";
import { Link } from "react-router-dom";
import { Badge, Card, Icon } from "react-materialize";
import moment from "moment";

const Reservation = ({ reservation, index }) => {
  return (
    <Card
      actions={[
        <Link key="1" to={"/"}>
          Voir
        </Link>,
      ]}
      className="blue-grey darken-1 reservation-card"
      closeIcon={<Icon>close</Icon>}
      revealIcon={<Icon>more_vert</Icon>}
      textClassName="white-text"
      title={reservation.username}
    >
      <Badge
        className={
          reservation.isconfirmed ? "green white-text" : "lime white-text"
        }
      >
        {reservation.isconfirmed ? (
          <>
            <Icon>check</Icon>
            <span className="status">Vérifié</span>
          </>
        ) : (
          <>
            <Icon>access_time</Icon>
            <span className="status">En attente</span>
          </>
        )}
      </Badge>
      <p>
        {moment(reservation.datebegin).format("DD MMMM YYYY")} ->{" "}
        {moment(reservation.dateend).format("DD MMMM YYYY")}
      </p>
      {/*<ShowDate*/}
      {/*  date={moment(reservation.datebegin).format("DD MMMM YYYY")}*/}
      {/*/>*/}
    </Card>
  );
};

export default Reservation;
