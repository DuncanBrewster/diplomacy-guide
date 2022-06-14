import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnFrance from "../../../components/returnRoutes/ReturnFrance";

const NorthernDash = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <BaseMap />
          <Legend />
        </div>
        <div className="right">
          <Navbar />
          <div className="bodySection">
            <ReturnFrance />
            <div className="content">
              <h5>The Northern Dash</h5>
              <p>
                F Bre - ENG <br />A Mar - Bur <br />A Par - Pic
              </p>
              <p>
                The most aggressive possible opening for France, it leaves
                Iberia completely untouched if the move succeeds. Obviously
                anti-English and possibly anti-German, this opening may leave
                you with no friends in Western Europe, and a very hungry-looking
                Italy in the east. It provides the maximum possible force on
                BEL, as well as the possibility of a convoy to WAL or LON.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NorthernDash;
