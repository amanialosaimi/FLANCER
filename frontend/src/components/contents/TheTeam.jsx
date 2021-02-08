import React from "react";
import { ReactComponent as TheTeamBanner } from "../../images/LastBlockImg.svg";

function TheTeam() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="column-66">
            <h1 className="large-font">
              <b>The Team</b>
            </h1>
            <p>
              <span className="firstBlock">
                {" "}
                Created with passion, care, and love to help anyone suffer from
                project issues by Abdulaziz Alfayaa, Abeer Albawardi, Amani
                Alosaimi, and Fahad Alsaedi at SEI-14.
              </span>
            </p>
            <br />
            <br />
          </div>
          <div className="column-33">
            <TheTeamBanner />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheTeam;
