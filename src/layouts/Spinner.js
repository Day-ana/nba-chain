import React, { Fragment } from "react";
import GridContainer from "components/Grid/GridContainer.js";
const Spinner = () => {
  return (
    <Fragment>
      <div className="load-wrapp">
        <div className="load-5">
          <div className="ring-2">
            <div className="ball-holder">
              <div className="ball"></div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Spinner;
