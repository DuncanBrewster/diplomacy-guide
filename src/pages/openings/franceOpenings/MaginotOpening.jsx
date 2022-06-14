import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnFrance from "../../../components/returnRoutes/ReturnFrance";

const MaginotOpening = () => {
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
            <ReturnFrance />
            <div className="content">
              <h5>The Maginot Opening</h5>
              <p>
                F Bre - MAO <br />A Mar S Par - Bur <br />A Par - Bur
              </p>
              <p>
                The calmer alternative to the Channel is MAO, which allows
                France great flexibility in befriending either England or
                Germany. Although it gives up the Channel to England, many times
                England will try desperately to woo France during the opening
                years by opening to NWG and NTH. The Mid-Atlantic fleet also
                gives France a chance for a quick break into the Med by sailing
                F MAO to Spain's South Coast, which borders WMS. Adding another
                fleet with F MAR can mount a powerful early attack on Italy, who
                usually focuses on the East for the first few years.
              </p>
              <p>
                By far the most common French opening, it allows France a finger
                in each of his three possible neutrals. It protects against an
                early German incursion, and the three moves are guaranteed to
                succeed. This is the most anti-German opening in France's
                repertoire as it guarantees a threat on MUN in the fall. Germany
                is usually not an early threat to France, and angering him by
                forcing yourself into BUR may not be the best policy. If
                England's friendship can be guaranteed, however, this opening
                can be extremely powerful by getting close to Germany rapidly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaginotOpening;
