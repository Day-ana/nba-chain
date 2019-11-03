import React, { Fragment } from "react";
import GridContainer from "components/Grid/GridContainer.js";
const Spinner = () => {
  return (
    <Fragment>
      <div className="spinner-container">
        <div className="spinner">
          <div className="outer">
            <div className="inner tl"></div>
            <div className="inner tr"></div>
            <div className="inner br"></div>
            <div className="inner bl"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Spinner;
