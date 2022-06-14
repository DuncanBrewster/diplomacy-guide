import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnAustria from "../../../components/returnRoutes/ReturnAustria";

const PureHedgehog = () => {
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
            <ReturnAustria />
            <div className="content">
              <h5>Pure Hedgehog</h5>
              <p>A Bud - Rum <br />F Tri - Ven <br /> A Vie - Gal</p>
              <p>
                The Hedgehog is a more defensive approach to Austria. In the
                Hedgehog, Austria moves its fleet in Trieste to Venice. The
                important part to this series of openings is that the move to
                Venice is defensive, not offensive: Austria doesn't intend to get
                into Venice, only to stall an Italian attack. The two most common
                anti-Austrian Italian openings both involve the move A Rom -> Ven
                (A Ven going to Tyl or Tri as the case may be). The Hedgehog stops
                that move, stops A Ven -> Tri, and thus hamstrings if not outright
                shuts down the Italian offensive. The tradeoff is that Austria
                loses significant influence on Greece, being at best able to send
                a single unit at it if anything at all.
              </p>
              <p>
                The "pure" Hedgehog sends the majority of the land forces Austria
                has after Russia, with the intention of standing Russia out of
                Rumania and Galicia. On the plus side, this can hamper the Russian
                advance significantly, especially with Turkish assistance; it is
                one of the better openings for dealing with Russia in an
                Austro-Turkish alliance, as it puts tremendous pressure on Russia
                (especially when coupled with Turkish F Ank -> BLA, A Smy -> Arm)
                while still not sacrificing defense against Italy. However, it is
                very weak to a Turkey with anti-Austrian intentions, as it can
                very easily lead to no builds in 1901.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PureHedgehog;
