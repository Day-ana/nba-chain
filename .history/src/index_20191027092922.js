/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
// import Admin from "layouts/Admin.js";
// import Cards from "layouts/Cards.js";
import Home from "layouts/Home.js";
// import Users from "src/views/UserProfile/UserProfile.js";
// import UserProfile from "views/UserProfile/UserProfile.js";

import "assets/css/material-dashboard-react.css?v=1.8.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/home" component={Home} />
      {/* <Route path="/users" component={UserProfile} /> */}
      <Redirect from="/" to="/home" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
