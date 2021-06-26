import React from "react";
import { DatePicker } from "react-materialize";

const DatePickerFr = ({ title, onSelect }) => {
  return (
    <DatePicker
      id={title}
      options={{
        autoClose: true,
        container: "body",
        defaultDate: null,
        disableDayFn: null,
        disableWeekends: false,
        events: [],
        firstDay: 0,
        format: "dddd d mmmm, yyyy",
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
            "Aut",
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
        onSelect: onSelect,
        parse: null,
        setDefaultDate: false,
        showClearBtn: false,
        showDaysInNextAndPreviousMonths: false,
        showMonthAfterYear: false,
        yearRange: 10,
      }}
    >
      {title}
    </DatePicker>
  );
};

export default DatePickerFr;
