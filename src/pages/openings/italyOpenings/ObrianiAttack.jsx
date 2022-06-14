import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnItaly from "../../../components/returnRoutes/ReturnItaly";

const ObrianiAttack = () => {
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
              <h5>The Obriani Attack</h5>
              <p>
                F Nap - ION <br />A Ven - Tyr <br />A Rom - Ven
              </p>
              <p>
                The most popular opening for Italy, this opening gives Italy a
                great shot at two builds, TUN, and an Austrian center or MUN.
                Although the attack on Austria is quick and often deadly, an
                Italian attack on Germany through MUN has become more popular,
                with the northern army bothering the Western Triple, conquering
                a center every now and then, until Italy can muster enough
                troops to turn west in force.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObrianiAttack;
