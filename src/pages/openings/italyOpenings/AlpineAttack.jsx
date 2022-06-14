import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnItaly from "../../../components/returnRoutes/ReturnItaly";

const AlpineAttack = () => {
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
              <h5>The Alpine Attack</h5>
              <p>
                F Nap - TYS <br />A Ven - Pie <br />A Rom - Tus
              </p>
              <p>
                This is an anti-French opening. It allows (A Tus-Tun, F TYS C A
                Tus-Tun), keeping powerful forces poised against Spain. France
                must also play a guessing game. If France moves A Mar-Spa but not A
                Par-Bur, they must now decide whether to order A Spa-Mar. If
                Italy then orders A Pie-Mar, the center is saved; if not, Spain
                is lost, and a fleet can't be built in Marseilles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlpineAttack;
