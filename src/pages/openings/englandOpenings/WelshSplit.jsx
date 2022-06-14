import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnEngland from "../../../components/returnRoutes/ReturnEngland";

const WelshSplit = () => {
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
            <ReturnEngland />
            <div className="content">
              <h5>The Welsh Split</h5>
              <p>
                F Lon - ENG <br />F Edi - NWG <br />A Lvp - Wal
              </p>
              <p>
                The anti-French Split opening. If France goes to the Channel,
                England is in a very awkward position, having a useless army in
                Wales and facing the possibility of a German fleet standing it
                out of the North Sea in the autumn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelshSplit;
