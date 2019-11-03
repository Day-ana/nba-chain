import React, { Fragment } from "react";
import GridContainer from "components/Grid/GridContainer.js";

const Spinner = () => {
  return (
    <Fragment>
      <div
        className="spinner"
        style={{ margin: "20% auto 0", fontSize: "32px" }}
      >
        <Spinner />
        <span className="spinner-double-dot-stick">Loading...</span>
      </div>
    </Fragment>
  );
};

export default Spinner;
