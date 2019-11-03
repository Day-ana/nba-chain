import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
// import Cards from "layouts/Cards.js";
import Home from "layouts/Home.js";
// import Lootbox from "layouts/LootBox.js";
// import Users from "src/views/UserProfile/UserProfile.js";
// import UserProfile from "views/UserProfile/UserProfile.js";

import "assets/css/material-dashboard-react.css?v=1.8.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/home" component={Home} />
      {/* <Route path="/lootbox" component={Lootbox} /> */}
      <Redirect from="/" to="/home" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
