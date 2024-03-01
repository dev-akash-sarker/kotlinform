import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Registration from "./components/Registration";
import Adminpanel from "./components/admin";
import LoggedInAdmin from "./components/PrivateRoutes/LoggedInAdmin";
import AdminUsersInfo from "./components/AdminData";
import LoggedOutAdmin from "./components/PrivateRoutes/LoggedOutAdmin";

import ThankYou from "./components/Thankyou";
import RootLayout from "./components/rootlayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<LoggedInAdmin />}>
          <Route path="/info" element={<AdminUsersInfo />} />
        </Route>
        <Route element={<LoggedOutAdmin />}>
          <Route path="/" element={<Registration />} />
          <Route path="/adminpanel" element={<Adminpanel />}></Route>
          <Route path="/thankyouforregistration" element={<ThankYou />}></Route>
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
