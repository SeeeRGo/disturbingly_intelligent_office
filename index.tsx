import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { App } from "./src";
import { store } from "./src/store";
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById("app-root"));
