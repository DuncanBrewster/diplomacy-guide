import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnItaly from "../../../components/returnRoutes/ReturnItaly";

const StandardLepanto = () => {
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
            <ReturnItaly />
            <div className="content">
              <h5>The Standard Lepanto</h5>
              <p>
                F Nap - ION <br />A Ven - H <br />A Rom - Apu
              </p>
              <p>
                When playing the Lepanto opening, Italy usually opens in Spring
                1901 with Fleet: Naples—Ionian Sea (to prepare for the convoy to
                Tunis), Army:Rome—Apulia (preparing to be convoyed), and Army:
                Venice HOLD (to conceal Italy's intentions and protect against a
                stab from Austria).
              </p>
              <p>
                In Fall 1901, Italy then plays Army:Apulia-Tunis, with
                Fleet:Ionian Sea convoying the army. They then build a fleet in
                Naples, a common site for Italian builds. This allows them to
                play in Spring 1902 Fleet:Ionian Sea—East Mediterranean and
                Fleet: Naples—Ionian Sea, with the army in Tunis holding. They
                can then spring their attack in Fall 1902 with Army:Tunis-Syria
                (convoyed by the fleets in Ionian Sea and the East
                Mediterranean). This positional advantage is usually fatal to
                Turkey, as they will likely be under attack by Austria as well.
                Alternatively the army can convoy to Smyrna in an attempt to
                outwit a Turkish player attempting to counter it.
              </p>
              <p>
                The chief problem with the Lepanto opening is that, if they are
                aware of it, Turkey can easily counter it. They do this by
                playing Fleet:Ankara-Constantinople in Spring 1901, followed by
                Fleet:Constantinople-Aegean Sea in Fall 1901, with a fleet build
                in Smyrna in the Winter. In Spring 1902, they then play
                Fleet:Smyrna-East Mediterranean, bouncing Italy's move.
                Therefore, Italy must usually pretend to negotiate an alliance
                with Turkey against Austria, using the army in Venice (ordered
                to HOLD) as a decoy.
              </p>
              <p>
                Another problem lies in the fact that Italy does not get any
                supply centers other than Tunisia until 1903 at the earliest.
                Also, until this supply center has been gained, only the army in
                Venice will be defending Italy, leaving it open to an attack by
                either Austria or France.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandardLepanto;
