import React from "react";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { createStore } from "redux";
import reducer from "./redux/reducers";

import { Root } from "./routes/Root";

import steps from "./steps";

import "reset.css";
import "./index.css";

const store = createStore(reducer, steps);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
