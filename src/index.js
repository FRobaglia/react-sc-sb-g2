import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/reset.css";
import "./assets/css/main.css";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
