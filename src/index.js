import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";

import App from "./App";

const rootElement = document.getElementById("root");
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
