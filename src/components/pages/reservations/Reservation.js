import React, { useState } from "react";
import { Badge, Button, Card, Icon, Modal } from "react-materialize";
import moment from "moment";
import { useEasybase } from "easybase-react";

const Reservation = ({ reservation }) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [validModalOpen, setValidModalOpen] = useState(false);
  const { sync, deleteRecord } = useEasybase();

  const validateButton = !reservation.isconfirmed ? (
    <Button
      key="3"
      onClick={() => setValidModalOpen(true)}
      className="waves-effect waves-white btn-flat light-green white-text"
    >
      <Icon style={{ marginLeft: "-10px", marginRight: "10px" }}>check</Icon>
      <span style={{ verticalAlign: "super" }}>Valider</span>
    </Button>
  ) : null;

  const reservationActions = [
    // <Button
    //   key="1"
    //   onClick={() => console.log("click")}
    //   className="waves-effect waves-white btn-flat teal lighten-2 white-text"
    // >
    //   <Icon style={{ marginLeft: "-10px", marginRight: "10px" }}>
    //     chevron_right
    //   </Icon>
    //   <span style={{ verticalAlign: "super" }}>Voir</span>
    // </Button>,
    validateButton,
    <Button
      key="2"
      onClick={() => setDeleteModalOpen(true)}
      className="waves-effect waves-white btn-flat orange lighten-1 white-text right delete-btn"
      tooltip="Supprimer"
    >
      <Icon>delete</Icon>
    </Button>,
  ];

  return (
    <>
      <Card
        actions={reservationActions}
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
              <Icon>event_available</Icon>
              <span className="status">Vérifié</span>
            </>
          ) : (
            <>
              <Icon>access_time</Icon>
              <span className="status">En attente</span>
            </>
          )}
        </Badge>
        <p>Du {moment(reservation.datebegin).format("DD MMMM YYYY")}</p>
        <p>Au {moment(reservation.dateend).format("DD MMMM YYYY")}</p>
      </Card>
      <Modal
        actions={[
          <Button
            flat
            onClick={() => {
              setDeleteModalOpen(false);
            }}
            node="button"
            waves="purple"
          >
            Annuler
          </Button>,
          <Button
            type="submit"
            node="button"
            waves="green"
            onClick={async () => {
              await deleteRecord({ record: reservation });
              await sync();
              setDeleteModalOpen(false);
            }}
          >
            Confirmer
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter
        header="Supprimer"
        open={deleteModalOpen}
        options={{
          onCloseEnd: () => setDeleteModalOpen(false),
        }}
      >
        Etes-vous sûr de vouloir supprimer cette réservation ?{" "}
      </Modal>
      <Modal
        actions={[
          <Button
            flat
            onClick={() => {
              setValidModalOpen(false);
            }}
            node="button"
            waves="purple"
          >
            Annuler
          </Button>,
          <Button
            type="submit"
            node="button"
            waves="green"
            onClick={async () => {
              reservation.isconfirmed = true;
              await sync();
              setValidModalOpen(false);
            }}
          >
            Confirmer
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter
        header="Valider"
        open={validModalOpen}
        options={{
          onCloseEnd: () => setValidModalOpen(false),
        }}
      >
        Etes-vous sûr de vouloir valider cette réservation ?{" "}
      </Modal>
    </>
  );
};

export default Reservation;
