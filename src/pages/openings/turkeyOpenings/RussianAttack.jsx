import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnTurkey from "../../../components/returnRoutes/ReturnTurkey";

const RussianAttack = () => {
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
              <h5>The Russian Attack</h5>
              <p>
                A Con - Bul <br />F Ank - BLA <br />A Smy - Arm
              </p>
              <p>
                Perhaps Turkey's best shot at winning, this opening aims at
                Turkey's most dangerous enemy—Russia. Unfortunately, Russia is
                Turkey's only possibility for a long-term ally, so the attack on
                Russia can leave Turkey friendless and surrounded in the East.
                The opening is quite deadly when Turkey takes the Black Sea, as
                an opportunistic Austria may be willing to offer Turkey
                assistance for a share of the Russian spoils. Without a fleet in
                BLA, the opening loses a good portion of its teeth, as gaining
                SEV is going to be impossible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RussianAttack;
