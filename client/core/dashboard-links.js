import DashboardIcon from "@material-ui/icons/Dashboard";
import DateRange from "@material-ui/icons/DateRange";
import HourglassEmpty from "@material-ui/icons/HourglassEmpty";
import People from "@material-ui/icons/People";
import AirlineSeatFlat from "@material-ui/icons/AirlineSeatFlat";

import Calendar from "../components/Calendar/Calendar.js";
import Home from "./Home"
import HoldingList from "./HoldingList"
import PatientList from "./PatientList"
import OperationList from "./OperationList"




var routes = [
  {
    path: "/dashboard",
    name: "Home",
    icon: DashboardIcon,
    component: Home
  },
  { 
    path: "/schedule", 
    name: "Schedule", 
    icon: DateRange, 
    component: Calendar
  },
  {
    path: "/holding-list",
    name: "Holding List",
    icon: HourglassEmpty,
    component: HoldingList
  },
  {
    path: "/patients",
    name: "Patients",
    icon: People,
    component: PatientList
  },
  {
    path: "/operations",
    name: "Operations",
    icon: AirlineSeatFlat,
    component: OperationList
  },
];

export default routes