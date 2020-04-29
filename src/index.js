import React from "react";
import ReactDom from "react-dom";
import APP from "./App.js";
import { Provider } from "react-redux";
import { configureStore } from "./store.js";

ReactDom.render(
  <Provider store={configureStore()}>
    <APP />
  </Provider>,
  document.getElementById("root")
);
