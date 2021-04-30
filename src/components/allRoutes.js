import ListReservations from "./pages/reservations/ListReservations";
import Calendar from "./pages/calendar/Calendar";

const routes = [
  {
    path: "/",
    exact: true,
    component: Calendar,
  },
  {
    path: "/reservations",
    exact: true,
    component: ListReservations,
  },
];

export default routes;
