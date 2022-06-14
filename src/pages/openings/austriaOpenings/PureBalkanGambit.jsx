import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnAustria from "../../../components/returnRoutes/ReturnAustria";

const PureBalkanGambit = () => {
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
            <ReturnAustria />
            <div className="content">
              <h5>Pure Balkan Gambit</h5>
              <p>A Bud - Ser <br /> F Tri - Alb <br /> A Vie - H</p>
              <p>
                The main feature of the Balkan Gambit is F Tri -> Alb. A Bud ->
                Ser is a critical part of the plan as well, but is such a common
                opening move that it betrays nothing. The Gambit is just that: It
                puts a lot of faith in Italy's goodwill in order to attain a
                dominant position on the Balkans. If the Archduke feels he can
                trust Italy, then the Balkan Gambit puts him in a powerful
                position after 1901, with a supported attack on Bulgaria or a move
                to Aegean Sea possible in Spring 1902 as well as ensuring him two
                builds. If he guesses wrong and Italy attacks, however, the result
                is usually calamitous: at best, Austria can repel Italy using the
                whole of its military, but this only delays the inevitable
                partition of Austria by Turkey and Russia; at worst, Italy can
                conquer the whole of the Austrian mainland unassisted by 1902, and
                Austria finds itself eliminated by 1903. The different variations
                are named for the destination of the army in Vienna.
              </p>
              <p>
                The original Balkan Gambit had Vienna hold. This move was popular
                in the very beginnings of Diplomacy, as it was meant to be a sign
                of trust in Italy and Russia (as opposed to the Tyrolean, Trieste,
                or Galician variations), but it has fallen out of favor because it
                is far too passive if Italy or Russia are actual threats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PureBalkanGambit;
