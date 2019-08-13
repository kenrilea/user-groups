import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import React, { Component } from "react";

import { Provider } from "react-redux";
import store from "./store.js";

import "./styles/main.css";
import "./styles/resetDefaults.css";

import App from "./components/App.jsx";

let root = (
  <Provider store={store}>
    <BrowserRouter>
      {/*---------------- exact FALSE routes here --------------*/}
      <Switch>
        {/*---------------- exact TRUE routes here --------------*/}
        <Route exact={true} path={"/"} component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(root, document.getElementById("root"));
