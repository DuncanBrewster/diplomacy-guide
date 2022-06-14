import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnGermany from "../../../components/returnRoutes/ReturnGermany";

const DanishVariation = () => {
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
            <ReturnGermany />
            <div className="content">
              <h5>The Danish Variation</h5>
              <p>
                F Kie - Den <br />A Mun - Ruh <br />A Ber - Kie
              </p>
              <p>
                Diplomatically neutral, this is the most popular German opening,
                gives him a shot at three builds, and focuses on the main point
                of contention for the West in 1901—the Low Countries.
              </p>
              <p>
                Recommended opening to every German player, since Denmark is
                always guaranteed for Germany (lest Fleet Kiel should slack off
                and do not move, allowing an English Fleet North Sea able to
                take over). This also opens Germany's way into Scandanavia, over
                which it may have to fight with England and Russia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DanishVariation;
