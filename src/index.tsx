import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider as ReduxProvider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";

ReactDOM.render(
  <ReduxProvider store={store}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </ReduxProvider>,
  document.getElementById("root")
);
reportWebVitals();
