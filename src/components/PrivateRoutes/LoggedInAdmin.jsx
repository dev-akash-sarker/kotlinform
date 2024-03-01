// import { useSelector } from "react-redux";
// import { Outlet } from "react-router-dom";

import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Registration from "../Registration";

export default function LoggedInAdmin() {
  const user = useSelector((users) => users.login.loggedIn);
  return user ? <Outlet /> : <Registration />;
}
