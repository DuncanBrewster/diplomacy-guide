import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnAustria from "../../../components/returnRoutes/ReturnAustria";

const Porcupine = () => {
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
              <h5>Porcupine</h5>
              <p>
                  A Bud S Vie - Gal <br />F Tri - Ven <br /> A Vie - Gal
              </p>
              <p>
                The Porcupine, despite the misnomer, is in fact a Hedgehog
                variant. By forcing Galicia, Austria hopes to try for both Rumania
                and Serbia (both unsupported) while protecting Galicia from
                Russian attack. It sacrifices the guaranteed build in Serbia for a
                shot at two builds while securing the Austrian borders from
                Russian and Italian attack. The "Dead Porcupine" aberration (aptly
                named) sends Budapest to Galicia with Vienna support, leaving
                Austria with basically no chance at a build.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Porcupine;
