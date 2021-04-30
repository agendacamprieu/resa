import React from "react";
import { DatePicker } from "react-materialize";

const ShowDate = ({ date }) => {
  return (
    <DatePicker
      value={date}
      options={{
        autoClose: false,
        container: null,
        defaultDate: null,
        disableDayFn: null,
        disableWeekends: false,
        events: [],
        firstDay: 0,
        format: "DD MMMM YYYY",
        i18n: {
          cancel: "Annuler",
          clear: "Effacer",
          done: "Ok",
          months: [
            "Janvier",
            "Février",
            "Mars",
            "Avril",
            "Mai",
            "Juin",
            "Juillet",
            "Août",
            "Septembre",
            "Octobre",
            "Novembre",
            "Décembre",
          ],
          monthsShort: [
            "Jan",
            "Fev",
            "Mar",
            "Avr",
            "Mai",
            "Jun",
            "Jul",
            "Aot",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          nextMonth: "›",
          previousMonth: "‹",
          weekdays: [
            "Dimanche",
            "Lundi",
            "Mardi",
            "Mercredi",
            "Jeudi",
            "Vendredi",
            "Samedi",
          ],
          weekdaysAbbrev: ["D", "L", "M", "M", "J", "V", "S"],
          weekdaysShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
        },
        isRTL: false,
        maxDate: null,
        minDate: null,
        onClose: null,
        onDraw: null,
        onOpen: null,
        onSelect: null,
        parse: null,
        setDefaultDate: false,
        showClearBtn: false,
        showDaysInNextAndPreviousMonths: false,
        showMonthAfterYear: false,
        yearRange: 10,
      }}
    />
  );
};

export default ShowDate;
