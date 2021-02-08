import React from "react";
import { ReactComponent as AMISBanner } from "../../images/MiddleBlockImg.svg";
function AIMS() {
  return (
    <div className="middleBlock">
      <div className="container">
        <div className="row">
          <div className="column-33">
            <AMISBanner />
          </div>
          <div className="column-66">
            <h1 className="large-font">
              <b>AIMS...</b>
            </h1>
            <br />
            <p>
              <span>
                FLANCER is your destination of showing the case of your existing
                projects, repositories, and designs in detail as a Developer
                while you are able to share them with other developers, aims to
                reduce the wasting work by creating a transparent and
                collaborative environment, to manage your work and effort.
              </span>
            </p>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIMS;
