import React, { useContext, useState } from "react";
import { Button, Icon, Modal, TextInput } from "react-materialize";
import DatePickerFr from "./pages/utils/DatePickerFr";
import moment from "moment";
import DataLoader from "./pages/utils/DataLoader";
import { useEasybase } from "easybase-react";
import M from "materialize-css";
import DateContext from "../context/DateContext";

const AddButton = () => {
  const [isLoading, setIsloading] = useState(false);
  const { beginDate, setBeginDate, endDate, setEndDate } = useContext(
    DateContext
  );
  const { Frame, sync } = useEasybase();
  const nameRef = React.createRef();

  const addResa = async () => {
    const newName = nameRef.current && nameRef.current.value;
    if (!newName) {
      nameRef.current.className = "validate invalid";
    } else if (verifyDates()) {
      setIsloading(true);
      Frame().push({
        username: newName,
        isconfirmed: false,
        datebegin: beginDate.format("YYYY-MM-DD"),
        dateend: endDate.format("YYYY-MM-DD"),
      });

      await sync();
      setIsloading(false);
    }
  };

  const verifyDates = () => {
    let result = false;
    if (beginDate && endDate) {
      const isReserved = Frame().find(
        (resa) =>
          beginDate.isBetween(moment(resa.datebegin), moment(resa.dateend)) ||
          endDate.isBetween(moment(resa.datebegin), moment(resa.dateend))
      );
      if (!isReserved) {
        if (beginDate.isAfter(moment())) {
          if (!beginDate.isAfter(endDate)) {
            result = true;
          } else {
            M.toast({
              html: "La date de fin de peut pas être avant la date de début.",
            });
          }
        } else {
          M.toast({
            html: "La date de début ne peut pas être avant aujourd'hui.",
          });
        }
      } else {
        M.toast({
          html: "Déjà réservé.",
        });
      }
    } else {
      !beginDate &&
        M.toast({
          html: "Hop hop hop, et la date de début là !",
        });
      !endDate &&
        M.toast({
          html: "Hop hop hop, et la date de fin là !",
        });
    }
    return result;
  };

  return isLoading ? (
    <DataLoader />
  ) : (
    <Modal
      id="addModal"
      header="Choix des dates"
      trigger={
        <Button
          floating
          fab={{
            direction: "left",
          }}
          icon={<Icon>add</Icon>}
          large
          node="button"
          waves="light"
          className="pulse"
        />
      }
      actions={[
        <Button flat modal="close" node="button" waves="green">
          Fermer
        </Button>,
      ]}
    >
      <TextInput
        label="Prénom"
        ref={nameRef}
        error="Oulala tu vas avoir des problèmes !"
        success="Good to go !"
        validate
      />
      <DatePickerFr
        title={"Date de début"}
        onSelect={(date) => setBeginDate(moment(date))}
      />
      <DatePickerFr
        title={"Date de fin"}
        onSelect={(date) => setEndDate(moment(date))}
      />
      <Button
        onClick={addResa}
        style={{ position: "absolute", bottom: "15px" }}
      >
        Valider
        <Icon right>send</Icon>
      </Button>
    </Modal>
  );
};

export default AddButton;
