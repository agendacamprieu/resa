import React from "react";

const DateContext = React.createContext({
  beginDate: null,
  endDate: null,
  isLoadingEvents: false,
  events: [],
});

export default DateContext;
