import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnItaly from "../../../components/returnRoutes/ReturnItaly";

const AlpineChicken = () => {
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
              <h5>The Alpine Chicken</h5>
              <p>
                F Nap - ION <br />A Ven - Pie <br />A Rom - Ven
              </p>
              <p>
                Italy has a range of openings that have entered popular
                perception as core, and the Alpine Chicken is one of them.
                Piedmont appears likely to attack France, but at the same time
                the Fall 1901 move of (A Ven – Tri; A Pie – Tyl) can be a very
                powerful one, leaving Marseille occupied by France and Austria
                on the ropes if all goes well.
              </p>
              <p>
                The opening is very dynamic, as Italy can attack France,
                Austria, or even gain Trieste by agreement and immediately move
                to attack Turkey. Of all Italy’s openings this surely presents
                the most options. The downside is that most of them are easily
                defensible by their intended targets and there is the risk that
                Italy prompts a coalition against it before it has even attacked
                anyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlpineChicken;
