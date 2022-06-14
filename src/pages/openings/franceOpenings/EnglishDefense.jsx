import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnFrance from "../../../components/returnRoutes/ReturnFrance";

const EnglishDefense = () => {
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
              <h5>The English Defense</h5>
              <p>
                F Bre - ENG <br />A Mar - Spa <br />A Par - Gas
              </p>
              <p>
                The opposite of the Northern Dash, this opening guarantees two
                builds from Iberia, while allowing Germany to make a quick
                strike into BUR if he so desires.
              </p>
              <p>
                If you can guarantee a supportive Germany and a relaxed Russia,
                this move can kill England, who will suffer terribly if the move
                to the Channel does not work. A French fleet in the Channel can
                support or be supported by a German fleet in Denmark into the
                North Sea, quickly ending England.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnglishDefense;
