import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnGermany from "../../../components/returnRoutes/ReturnGermany";

const SilesianOpening = () => {
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
              <h5>The Silesian Opening</h5>
              <p>
                F Kie - Hol <br />A Mun - Sil <br />A Ber - Kie
              </p>
              <p>
                This move keeps Silesia safe from an errant Russian army and
                thus all but guarantees that you can hold Berlin/Munich in Fall
                1901. However, Russia moves into Silesia in Spring 1901 so
                infrequently that the diplomatic disadvantages of moving to
                Silesia (ticking off a major neighbor) likely outweigh the
                tactical benefits. If Mun-Sil does succeed and Austria also
                succeeds with a move to Galicia in Spring 1901, then a supported
                attack on Warsaw in Fall 1901 is theoretically possible, but
                Austria will likely have other plans for Galicia, or even want
                to claim Warsaw for himself, which would be awkward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SilesianOpening;
