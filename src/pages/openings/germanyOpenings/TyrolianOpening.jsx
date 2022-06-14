import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnGermany from "../../../components/returnRoutes/ReturnGermany";

const TyrolianOpening = () => {
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
              <h5>The Tyrolian Opening</h5>
              <p>
                F Kie - Hol <br />A Mun - Tyr <br />A Ber - Kie
              </p>
              <p>
                This move aims to keep Italy's army out of Tyrolia, to the
                benefit of both you and Austria-Hungary. If Italy's move to
                Tyrolia is bounced, then Munich and Vienna/Trieste are kept safe
                in fall. However, the move to Tyrolia can be slightly
                inconvenient if it succeeds, as now you have likely upset both
                Italy and Austria-Hungary and given yourself less say in the
                critical Western theater over the low countries. Rarely, you may
                have the opportunity from Tyrolia to grab Venice/Vienna/Trieste
                in Fall 1901, but this is probably ill-advised unless the right
                diplomatic conditions are present. Most likely it is better to
                pack your bags and move back to Munich in fall.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TyrolianOpening;
