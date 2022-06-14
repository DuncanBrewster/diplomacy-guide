import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnAustria from "../../../components/returnRoutes/ReturnAustria";

const BohemianAberration = () => {
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
              <h5>The Bohemian Aberration</h5>
              <p>A Bud - Ser <br />F Tri - Alb <br /> A Vie - Boh</p>
              <p>
                The Bohemian Aberration is named so because the move to Bohemia
                is, predictably, unusual. Conventional wisdom suggests that an
                early Austrian-German war is disastrous for both sides, and this
                particular bit of conventional wisdom holds up. Thus, to even see
                aggression against Germany in the form of opening to Bohemia is
                aberrant. Furthermore, the purpose of the army in Vienna changes
                completely. Whereas in all other permutations of the Gambit the
                Viennese army is used on defense, the move to Bohemia would only
                defend against the inconceivably rare move A Mun -> Boh. It is
                mainly used as a springboard for a joint attack on Germany, in
                most cases with Russia. Not advised; acquisition of Munich may
                well come at the cost of Trieste, and if Russia backstabs and
                orders A War -> Gal instead of Sil (as, in this system, Russia is
                supposed to open), Austria is in a bind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BohemianAberration;
