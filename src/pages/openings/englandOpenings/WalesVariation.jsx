import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnEngland from "../../../components/returnRoutes/ReturnEngland";

const WalesVariation = () => {
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
              <h5>The Wales Variation</h5>
              <p>
                F Lon - ENG <br />F Edi - NTH <br />A Lvp - WAL
              </p>
              <p>
                Unequivocally anti-French. This move is risky, as failure to
                acquire the Channel in the spring will make this army useless in
                the autumn. Useful only when you expect to acquire the Channel,
                this move provides the strongest set of moves for a French
                campaign, as the army may be convoyed to Brest or Picardy
                (usually while NTH acquires Norway) OR may be used in a
                supported convoy to Belgium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalesVariation;
