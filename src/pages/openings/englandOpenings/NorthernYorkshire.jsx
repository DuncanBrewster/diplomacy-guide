import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnEngland from "../../../components/returnRoutes/ReturnEngland";

const NorthernYorkshire = () => {
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
              <h5>The Northern Yorkshire</h5>
              <p>
                F Lon - NTH <br />F Edi - NWG <br />A Lvp - Yor
              </p>
              <p>
                The soundest opening from the classical perspective of
                maximizing minimum gains, this is the only English opening that
                guarantees a build against all opposition. In brighter times,
                one may convoy with support to Norway or convoy to Belgium and
                claim Norway with a fleet; if France, Germany and Russia are
                determined to stop you, Yorkshire can cover London when France
                moves to the English Channel, and Norwegian Sea can support
                North Sea to Norway despite a Russian move Mos -> Stp -> Nwy
                (though a German in this case would seize the North Sea, F Kie
                -> Den -> NTH; whether or not this is desirable is up for
                debate).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NorthernYorkshire;
