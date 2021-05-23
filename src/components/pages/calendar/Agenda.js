import React, { useContext } from "react";
import Calendar from "./Calendar";
import DataLoader from "../utils/DataLoader";
import DateContext from "../../../context/DateContext";

const Agenda = () => {
  const { isLoadingEvents } = useContext(DateContext);

  return isLoadingEvents ? <DataLoader /> : <Calendar />;
};

export default Agenda;
