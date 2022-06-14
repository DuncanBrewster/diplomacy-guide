import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnAustria from "../../../components/returnRoutes/ReturnAustria";

const AlpineHedgehog = () => {
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
              <h5>Alpine Hedgehog</h5>
              <p>A Bud - Gal <br /> F Tri - Ven <br /> A Vie - Tyr</p>
              <p>
                Much like the "pure" Hedgehog, the Alpine variation sacrifices the
                guaranteed build in Serbia for the purpose of stopping a hostile
                opponent completely in its tracks. However, unlike the original,
                the opponent is Italy, not Russia; and, more importantly, it is
                guaranteed to stop a hostile opponent in its tracks (whereas
                Russia with a neutral Turkey can usually handle the pure
                Hedgehog). Used when Italy seems hostile and Turkish friendship
                can once again be assured, as the build in Serbia is once again
                not guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlpineHedgehog;
