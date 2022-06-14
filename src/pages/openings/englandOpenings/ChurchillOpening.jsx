import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnEngland from "../../../components/returnRoutes/ReturnEngland";

const ChurchillOpening = () => {
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
              <h5>The Churchill Opening</h5>
              <p>
                F Lon - NTH <br />F Edi - NWG <br />A Lvp - Edi
              </p>
              <p>
                In this Northern Opening variant, known simply as the Churchill
                Opening, and named after Sir Winston's plan to invade Norway in
                World War II, the English army is sent to Edinburgh. This
                opening sacrifices the ability to cover London for more
                convoying options in the autumn. For an England looking for two
                builds in a favorable diplomatic situation, this allows for
                Norway to be captured with an army and Belgium/Holland/Denmark
                with a fleet. London may still be covered by the North Sea, but
                Norway cannot be secured against Russian resistance if this
                happens. This move is superior to the Yorkshire Variation if and
                only if one guesses correctly on French intentions; if they go
                to the Channel, a build isn't guaranteed, but if they don't,
                England's options are greater.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChurchillOpening;
