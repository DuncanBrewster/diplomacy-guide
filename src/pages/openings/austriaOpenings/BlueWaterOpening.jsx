import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnAustria from "../../../components/returnRoutes/ReturnAustria";

const BlueWaterOpening = () => {
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
              <h5>Blue Water Opening</h5>
              <p>
                A Bud - Ser
                <br /> F Tri - ADR
                <br /> A Vie - Gal
              </p>
              <p>
                Austria very rarely sets out to conquer the seas in the early
                going of a round of Diplomacy; virtually all of its objectives are
                land-based, as are its potential threats, and while it is true
                that Austria is more or less required to raise a functioning navy
                of at least 2-3 fleets to conquer Italy and Turkey and win, such
                expenditures are rarely affordable early and even more rarely
                advisable. Nevertheless, in the right diplomatic framework, an
                opening to the Adriatic Sea can be useful. This most often signals
                an attack on Italy, especially if done in the "Von Metzke Blitz"
                opening (named after Conrad von Metzke, an older Diplomacy player
                reputed for attacking Italy from the start as Austria) which sends
                Budapest to Trieste and Vienna to Tyrolia. These openings are
                rarely advised because they either divide Austria's front and make
                the defense of Austria's gains very difficult or they pull Austria
                away from the Balkans entirely, sacrificing great gains and
                putting Austria in peril on the eastern front for relatively
                sparse gains in Italy.
              </p>
              <p>
                The most notable exception to the above paragraph is the Blue
                Water Lepanto, where Austria opens seemingly anti-Italian but
                actually inserts its fleet into Italy's convoy line. The result of
                this is to free up Italy's second fleet build for use against
                France; combined with the army most Italian players leave behind
                when running the Lepanto and any support from England or Germany,
                Italy can be a force in the west.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueWaterOpening;
