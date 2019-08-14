import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// DATA STORE
import { Provider } from "react-redux";
import Store from "./data-store";
// DATA STORE

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/e-commerce.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import "antd/dist/antd.css";

import AdminLayout from "layouts/Admin.jsx";

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Switch>
        <Route path="/admin" render={props => <AdminLayout {...props} />} />
        <Redirect from="/" to="/admin/list" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
