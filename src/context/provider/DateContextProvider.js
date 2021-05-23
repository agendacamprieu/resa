import React, { useEffect, useState } from "react";
import DateContext from "../DateContext";
import { useEasybase } from "easybase-react";

const DateContextProvider = ({ children }) => {
  const [beginDate, setBeginDate] = useState({});
  const [endDate, setEndDate] = useState({});
  const [isLoadingEvents, setIsLoadingEvents] = useState(true);
  const [events, setEvents] = useState([]);
  const value = {
    beginDate,
    setBeginDate,
    endDate,
    setEndDate,
    isLoadingEvents,
    events,
  };

  const { Query } = useEasybase();

  useEffect(() => {
    (async () => {
      setIsLoadingEvents(true);
      const res = await Query({
        queryName: "confirmed",
        tableName: "RESERVATION",
      });
      setEvents(res);
      setIsLoadingEvents(false);
    })();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};

export default DateContextProvider;
