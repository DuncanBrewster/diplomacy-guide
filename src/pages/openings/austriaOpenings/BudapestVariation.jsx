import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnAustria from "../../../components/returnRoutes/ReturnAustria";

const BudapestVariation = () => {
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
              <h5>The Budapest Variation</h5>
              <p>A Bud - Ser <br />F Tri - Alb <br /> A Vie - Bud</p>
              <p>
                The Budapest Variation is also aberrant in its purpose. Moving
                Vienna east to start, instead of north to Galicia or south/west to
                Tyrolia or Trieste, provides nothing in terms of defensive
                advantages; if neighbors are hostile, then Austria wants to move
                to those soft spots, not elsewhere. Budapest is an offensive move,
                used to acquire Rumania with support most of the time and possibly
                as a springboard to joint Austro-Turkish cooperation in the
                Balkans and beyond. The flaw lies in that intention, though;
                Galicia is a far better spot to conduct anti-Russian ventures in,
                as it also threatens the home center Warsaw and soft spot Ukraine
                (which border three Russian home centers and one normally-Russian
                neutral center!). The argument is that one doesn't want to bounce
                in Galicia, because then the third army isn't arrayed properly
                against Rumania; but, if Russia is moving to Galicia, and Austria
                is anti-Russian, it makes no sense to allow Russia a potshot at
                two home centers. And any ability to defend against Italy is
                nonexistent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudapestVariation;
