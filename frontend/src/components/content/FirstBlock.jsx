import React from "react";
import { ReactComponent as FirstBlockImg } from "../../images/FirstBlockImg.svg";
function FirstBlock() {
  return (
    <div className="container">
      <div className="row">
        <div className="column-66">
          <h1 className="xlarge-font">
            THE DISTINATION <br />
            OF KEEPING YOUR WORK <br />
            <br />
          </h1>
          <h1 className="large-font">
            <b>Why FLANCER?</b>
          </h1>
          <p>
            <span className="firstBlock">
              {" "}
              Manage your projects, showcase your projects, FLANCER can easily
              keep your projects and no more wasting work!
            </span>
          </p>
          <br />
          <br />
        </div>
        <div className="column-33">
          <FirstBlockImg />
        </div>
      </div>
    </div>
  );
}

export default FirstBlock;
