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
import { Provider } from "react-redux";
import store from "./components/features/stores/Store";
import ThankYou from "./components/Thankyou";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<LoggedInAdmin />}>
          <Route path="/info" element={<AdminUsersInfo />} />
        </Route>
        <Route element={<LoggedOutAdmin />}>
          <Route index element={<Registration />} />
          <Route path="/adminpanel" element={<Adminpanel />}></Route>
          <Route path="/thankyouforregistration" element={<ThankYou />}></Route>
        </Route>
      </Route>
    )
  );
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
