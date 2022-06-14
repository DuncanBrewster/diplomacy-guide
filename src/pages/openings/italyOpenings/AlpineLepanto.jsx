import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnItaly from "../../../components/returnRoutes/ReturnItaly";

const AlpineLepanto = () => {
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
              <h5>The Alpine Lepanto</h5>
              <p>
                F Nap - ION <br />A Ven - Pie <br />A Rom - Apu
              </p>
              <p>
                The attack on France is generally quite weak—even if Italy
                manages to grab MAR in 1901, he is unlikely to keep it. France
                and Italy are natural allies, as they extend their territorial
                reach towards Russia.
              </p>
              <p>
                If Italy can enlist German and English support, the attack can
                dismantle France very quickly. This is a big if, and is usually
                used only as part of the Central Triple Alliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlpineLepanto;
