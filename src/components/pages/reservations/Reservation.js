import React from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Switch } from "react-materialize";
import moment from "moment";

const Reservation = ({ reservation, index }) => {
  return (
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
      title={reservation.username}
    >
      <Switch
        id={"switch-" + index}
        offLabel="En attente"
        onLabel="Vérifié"
        checked={reservation.isconfirmed}
      />
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
