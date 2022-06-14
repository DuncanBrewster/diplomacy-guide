import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnTurkey from "../../../components/returnRoutes/ReturnTurkey";

const AntiLepanto = () => {
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
              <h5>The Anti Lepanto</h5>
              <p>
                A Con - Bul <br />F Ank - Con <br />A Smy - Ank
              </p>
              <p>
                Not a common opening because it requires great trust in Russia
                from the first turn and shows the other countries immediately
                that a Juggernaut alliance is in the makings. Instead of
                bouncing fleets in the Black Sea, you send your fleet to
                Constantinople followed by the fleet being move to AEG in the
                fall. The Smyrna army moves to Ankara to make room for a fleet
                build in Smyrna come the winter. If Italy is trying for the
                Lepanto, this will shut that down. This opening has the
                advantage of gaining a stronger foothold in the Mediterranean
                but with it comes many risks. Turkey must now commit to pushing
                west through the Mediterranean and limits Turkey's options of
                alliances to Russia. Russia can also use the opportunity to stab
                Turkey now that the Black Sea is open, which is why most players
                see it as a high risk, low reward opening.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntiLepanto;
