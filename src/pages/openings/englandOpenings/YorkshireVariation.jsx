import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnEngland from "../../../components/returnRoutes/ReturnEngland";

const YorkshireVariation = () => {
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
              <h5>The Yorkshire Variation</h5>
              <p>
                F Lon - ENG <br />F Edi - NTH <br />A Lvp - Yor
              </p>
              <p>
                A much safer prospect than the Wales Variation, and similarly
                less profitable as an anti-French maneuver. This opening is the
                opening of choice for an England only wishing to bounce in the
                Channel, as the army may then be convoyed to Norway or to
                Belgium. As an offensive opening, the Channel pressures the
                French homeland while providing support for a convoy to
                Belgium... or, perhaps, the opportunity to claim Norway with a
                convoy and Belgium with a fleet! Using your fleet in NTH to
                convoy your army also frees up the fleet in English Channel to
                capture the Mid-Atlantic Ocean in Fall 1901, putting France in
                an extremely awkward position for 1902.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YorkshireVariation;
