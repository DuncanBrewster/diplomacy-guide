import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnTurkey from "../../../components/returnRoutes/ReturnTurkey";

const BulgarianPush = () => {
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
            <ReturnTurkey />
            <div className="content">
              <h5>The Bulgarian Push</h5>
              <p>
                A Con - Bul <br />F Ank - BLA <br />A Smy - Con
              </p>
              <p>
                Turkey's best shot at two builds in 1901 is a push through BUL,
                followed by either a move to GRE or SER, or RUM with Austrian
                support. Although Turkey rarely gets two builds—most Austrians
                move to ALB and SER in S 1901, and thus can pick up both SCs,
                and are wary of giving support to Turkey, Austria's natural
                enemy, the opening is safe and allows Turkey to work with or
                against any of his neighbors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulgarianPush;
