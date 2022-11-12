
import Dashboard from "views/Dashboard.js";
import Room from "views/Rooms.js";
import Package from "views/Packages.js";
import ClientDetail from "views/Client.js";
import ViewPackage from "views/ViewPackages.js";
import Reservation from "views/MakeReservation.js";





const dashboardRoutes = [



  {
    path: "/dashboard",
    name: "Dashboard",

    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/rooms",
    name: "Room handling",

    component: Room,
    layout: "/admin"
  },
  {
    path: "/packages",
    name: "Package handling",

    component: Package,
    layout: "/admin"
  },
  {
    path: "/clients-data",
    name: "View Client details",

    component: ClientDetail,
    layout: "/admin"
  },

  {
    path: "/reservation-details",
    name: "Make reservation",

    component: Reservation,
    layout: "/admin"
  }

];

export default dashboardRoutes;
