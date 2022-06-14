import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnItaly from "../../../components/returnRoutes/ReturnItaly";

const KeyLepanto = () => {
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
              <h5>The Key Lepanto</h5>
              <p>
                F Nap - ION <br />A Ven - Tri <br />A Rom - Apu
              </p>
              <p>
                The Key Lepanto is an uncommonly employed variation of the
                Lepanto opening. The moves are the same as for the standard
                Lepanto, but rather than holding, Italy plays their army from
                Venice-Trieste-Serbia (usually with Austrian support to foil
                Turkey's Army:Bulgaria-Serbia). The Key Lepanto variation is
                rarely seen, as it requires great trust on the part of the
                Austrian player that Italy will not simply decide to stay in
                Trieste.
              </p>
              <a
                href="https://diplomacy.fandom.com/wiki/Playing_the_Key_Lepanto"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <p className="author">Click here for full article by Tony Swinnerton</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyLepanto;
