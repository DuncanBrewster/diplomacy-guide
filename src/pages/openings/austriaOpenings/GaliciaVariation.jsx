import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnAustria from "../../../components/returnRoutes/ReturnAustria";

const GaliciaVariation = () => {
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
            <h5>The Galicia Variation</h5>
            <p>A Bud - Ser <br />F Tri - Alb <br /> A Vie - Gal</p>
            <p>
              The Galicia Variation is a logical extension of the logic behind
              the Balkan Gambit. If a player is going to move Trieste to Albania
              in the first place, he must have some kind of nonaggression or
              alliance arrangement with Italy in the first place. In that case,
              if Italy is lying, Austria is in trouble no matter what he plays,
              unless he gets preknowledge of Italy's attack and counters it
              right. At any rate, even defending against Italy only means a
              slightly slower death by Russia and Turkey. In short, if Italy
              attacks an Austria doing the Balkan Gambit, then regardless of how
              successful the defense against Italy is, Austria will die. Why not
              go all the way, then, and put total trust in Italy? If Austria is
              wrong, he is no worse off; he will die faster, but his death was
              inevitable, and in some eyes dragging out one's demise is not
              better than a quick exit anyhow. But if Austria is right, then he
              is suddenly in a very powerful position. If Austria can trust his
              Italian neighbor not to attack him straight away, then moving to
              Galicia is the best option: either a hostile Russia will be stood
              out of Galicia, or a passive Russia will have let Austria into
              Galicia. Then Austria has all kinds of options: an attack on
              Warsaw, supported moves to Rumania or Greece, or even a powerful
              position move into Ukraine (good luck sorting THAT out as the
              Russian player!) are all available, and even if by some crazy
              circumstance Austria faces hostilities on the border, it can STILL
              cover against an Italian attack (Gal -> Vie, Ser S Alb -> Tri --
              no worse than the Trieste variation!) or the rare German excursion
              into Bohemia (Gal -> Vie).
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GaliciaVariation;
