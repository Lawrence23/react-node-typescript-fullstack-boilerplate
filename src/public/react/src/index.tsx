import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import { Provider } from "react-redux";

import App from "./containers/app";
// import store from "./store";
// import "./styles/common.css";

const run = () => {
  render(
    // <Provider store={store}>
    <Router>
      <App />
    </Router>,
    // </Provider>,
    document.querySelector("#root")
  );
};

if (window.addEventListener) {
  window.addEventListener("DOMContentLoaded", run);
} else {
  (window as any).attachEvent("onload", run);
}
