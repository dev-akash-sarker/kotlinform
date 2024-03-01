import ReactDOM from "react-dom/client";

import App from "./App.jsx";
// eslint-disable-next-line no-unused-vars
import firebaseconfig from "./DB/firebaseconfig.js";
import { Provider } from "react-redux";
import store from "./components/features/stores/Store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
