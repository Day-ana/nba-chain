import React, { Fragment } from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <Fragment>
    <div className="spinner" style={{ margin: "20% auto 0", fontSize: "32px" }}>
      <Spinner />
      <span className="spinner-double-dot-stick">Loading...</span>
    </div>
  </Fragment>
);
