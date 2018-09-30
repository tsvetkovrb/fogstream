import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Root } from "./routes/Root";

import steps from "./steps";

import "reset.css";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Root steps={steps} />
  </BrowserRouter>,
  document.getElementById("root")
);
