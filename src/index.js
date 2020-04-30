import React from "react";
import ReactDom from "react-dom";
import APP from "./App.js";
import { Provider } from "react-redux";
import { configureStore } from "./store.js";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const store = configureStore();
const persistor = persistStore(store);

ReactDom.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<div>loading...</div>}>
      <APP />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
