import React, { useEffect } from "react";
import { useEasybase } from "easybase-react";
import moment from "moment";

const ListReservations = () => {
  const { Frame, sync, configureFrame } = useEasybase();

  useEffect(() => {
    configureFrame({ tableName: "RESERVATION", limit: 10 });
    sync();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  console.log(Frame());

  const resaRootStyle = {
    border: "2px #0af solid",
    borderRadius: 9,
    margin: 20,
    backgroundColor: "#efefef",
    padding: 6,
  };

  return (
    <div style={{ width: 400 }}>
      {Frame().map((resa, index) => (
        <div style={resaRootStyle} key={index}>
          <h3>{resa.username}</h3>
          <div>confirmed ? {resa.isconfirmed ? <p>true</p> : <p>false</p>}</div>
          <p>{moment(resa.datebegin).format("DD MMMM YYYY, h:mm:ss a")}</p>
          <p>{moment(resa.dateend).format("DD MMMM YYYY, h:mm:ss a")}</p>
        </div>
      ))}
    </div>
  );
};

export default ListReservations;
