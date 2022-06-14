import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnAustria from "../../../components/returnRoutes/ReturnAustria";

const TriesteVariation = () => {
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
              <h5>The Trieste Variation</h5>
              <p>A Bud - Ser <br /> F Tri - Alb <br /> A Vie - Tri</p>
              <p>
                Once the Pure Balkan Gambit fell out of favor, Austrians began to
                use their Vienna armies actively on defense. The rationale
                favoring the Trieste Variation made sense on the surface. The most
                dangerous of the various potential attacks on an Austria running
                the Gambit in S01 is the Italian move Rome -> Venice, Venice ->
                Trieste. Support holding Trieste allows Italy either to keep
                Trieste or retreat to Budapest (if Ser/Alb/Vie dislodge Tri, Bud
                is open); some Austrias play less defensively, some Italians play
                more aggressively, and the results can be disastrous, with Austria
                facing the loss of two home centers in the first year and a
                3-build Italy in W01. So, by moving to Trieste, the Austrians shut
                down this threat. Initially it worked, but Italian players wised
                up and began ordering what is now known as the Obrieni Attack
                (Rome -> Venice, Venice -> Tyrolia); this move proves very
                inconvenient for the Trieste Variation, as now Austria *must* move
                Tri -> Vie (to cover that potential threat) and Alb -> Tri (Ser S)
                to cover against any Italian intrusions. Obviously, any
                interference from Russia or Turkey -- who have a lot to gain from
                carving up Austria -- proves fatal, and this variant too has
                fallen out of favor, though many an Austrian, convinced they have
                a DMZ with Russia in Galicia, order it anyway.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TriesteVariation;
