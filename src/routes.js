
import Dashboard from "views/Dashboard.js";
import Room from "views/Rooms.js";
import Package from "views/TableList.js";
import ClientDetail from "views/Typography.js";
import ViewPackage from "views/Icons.js";
import Reservation from "views/Maps.js";
import EditReservation from "views/Notifications.js";


const dashboardRoutes = [

  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/rooms",
    name: "Room Handling",
    icon: "nc-icon nc-circle-09",
    component: Room,
    layout: "/admin"
  },
  {
    path: "/packages",
    name: "Package Handling",
    icon: "nc-icon nc-notes",
    component: Package,
    layout: "/admin"
  },
  {
    path: "/clients-data",
    name: "View Client details",
    icon: "nc-icon nc-paper-2",
    component: ClientDetail,
    layout: "/admin"
  },
  {
    path: "/packages-details",
    name: "view packages",
    icon: "nc-icon nc-atom",
    component: ViewPackage,
    layout: "/admin"
  },
  {
    path: "/reservation-details",
    name: "make reservation",
    icon: "nc-icon nc-pin-3",
    component: Reservation,
    layout: "/admin"
  }

];

export default dashboardRoutes;
