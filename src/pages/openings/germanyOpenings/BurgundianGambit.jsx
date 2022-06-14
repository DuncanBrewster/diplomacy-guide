import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnGermany from "../../../components/returnRoutes/ReturnGermany";

const BurgundianGambit = () => {
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
            <ReturnGermany />
            <div className="content">
              <h5>The Burgundian Gambit</h5>
              <p>
                F Kie - Hol <br />A Mun - Bur <br />A Ber - Kie
              </p>
              <p>
                This can be an arranged standoff with France over BUR—it is
                difficult for Germany to mount an effective attack on France in
                1901 because he does not have enough units bordering French
                territory. All of France's centers can be covered if Germany
                manages to slip the army in, and the German army is better
                positioned in RUH to take BEL and HOL.
              </p>
              <p>
                This move requires the alliance of Russia and Austria-Hungary.
                With this move you have a possibility of 3 gained supply centers
                by spring 1902. This move is very anti-France and should (with
                the help of England) be able to take down France fairly quickly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgundianGambit;
