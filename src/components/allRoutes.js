import ListReservations from "./pages/reservations/ListReservations";
import Agenda from "./pages/calendar/Agenda";

const routes = [
  {
    path: "/",
    exact: true,
    component: Agenda,
  },
  {
    path: "/reservations",
    exact: true,
    component: ListReservations,
  },
];

export default routes;
