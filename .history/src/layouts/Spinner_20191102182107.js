import React, { Fragment } from "react";
import GridContainer from "components/Grid/GridContainer.js";

const Spinner = () => {
  return (
    <Fragment>
      <div class="spinner">
        <div class="outer">
          <div class="inner tl"></div>
          <div class="inner tr"></div>
          <div class="inner br"></div>
          <div class="inner bl"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Spinner;
