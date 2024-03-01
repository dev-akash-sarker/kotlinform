// import { useSelector } from "react-redux";
// import { Outlet } from "react-router-dom";

import { Outlet } from "react-router-dom";
import AdminUsersInfo from "../AdminData";
import { useSelector } from "react-redux";

export default function LoggedInAdmin() {
  const user = useSelector((users) => users.login.loggedIn);
  return user ? <Outlet /> : <AdminUsersInfo />;
}
