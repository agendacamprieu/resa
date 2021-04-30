import React, { useEffect, useState } from "react";
import { useEasybase } from "easybase-react";
import Calendar from "./Calendar";
import DataLoader from "../utils/DataLoader";

const Agenda = () => {
  const [isLoading, setIsloading] = useState(false);
  const [events, setEvents] = useState([]);

  const { Query } = useEasybase();

  useEffect(() => {
    (async () => {
      setIsloading(true);
      const res = await Query({
        queryName: "confirmed",
        tableName: "RESERVATION",
      });
      // let eventsArray = [];
      // res &&
      //   res.length &&
      //   res.forEach(
      //     (resa) =>
      //       eventsArray.push({
      //         id: resa._id,
      //         color: "#1ccb9e",
      //         from: moment(resa.datebegin).format("YYYY-MM-DD"),
      //         to: moment(resa.dateend).format("YYYY-MM-DD"),
      //         title: resa.username,
      //       })
      //   );
      setEvents(res);
      setIsloading(false);
    })();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return isLoading ? (
    <DataLoader />
  ) : events ? (
    <Calendar events={events} />
  ) : null;
};

export default Agenda;
