import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnItaly from "../../../components/returnRoutes/ReturnItaly";

const BlueWaterLepanto = () => {
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
              <h5>The Blue Water Lepanto</h5>
              <p>
                F Nap - ION <br />A Ven - H <br />A Rom - Apu
              </p>
              <p>
                Manus Hand's Fall 1901 continuation of the Blue Water Opening.
                The Austrian (who opened to the Adriatic) sails to the Ionian in
                Fall of 1901 to be the victim of an arranged dislodgement by
                Italian fleets from Naples and Tunis in Spring 1902. Austria's
                fleet then surprises the Turkish player by retreating eastward
                to form part of the convoy chain that carries an Italian army to
                Turkey.
              </p>
              <a
                href="http://uk.diplom.org/pouch/Zine/W1999A/Hand/bwl.html"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <p className="author">Click here for full article by Manus Hand</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueWaterLepanto;
