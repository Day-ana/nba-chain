import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "assets/css/material-dashboard-react.css?v=1.8.0";

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
