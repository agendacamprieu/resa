import React from "react";

const YearSmallDays = () => {
  const smallDays = ["l", "m", "m", "j", "v", "s", "d"];

  return (
    <div className="header-small-days">
      {smallDays.map((day, index) => (
        <div key={index} className="year-day">
          {day}
        </div>
      ))}
    </div>
  );
};

export default YearSmallDays;
