import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnAustria from "../../../components/returnRoutes/ReturnAustria";

const TyrolianVariation = () => {
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
              <h5>The Tyrolian Variation</h5>
              <p>A Bud - Ser <br />F Tri - Alb <br />A Vie - Tyr</p>
              <p>
                The Tyrolean Variation was the Austrian response to the Obrieni
                Attack. Most Italian players, after some experimentation with the
                Obrieni Attack, found it to be the superior choice of opening
                regardless of Austrian intentions with the army in Vienna. Given
                the uncertainty surrounding the Austrian Attack (Ven -> Tri, Rom
                -> Ven) and the fact that, at the time, the most popular move for
                Vienna was to Trieste, the Austrian Attack had greater prospects
                for screwing Italy over if Austria sniffed it out. It also has the
                advantage of not being 100% anti-Austrian: a trend later developed
                that saw Italy hold the army in Venice, while the army in Tyrolia
                went to Munich with support from a French army in Burgundy. Some
                particularly bold Austrians took advantage of this new trend with
                the Tyrolean Variation. This is the defensive equivalent of the
                Austrian Attack: a high-risk, high-reward play. If Austria guessed
                right and Italy moved Rom -> Ven -> Tyl, Vienna stands in place
                for defense against a possible Russian attack from Galicia and
                also defeats the Italian attack utterly. But if Austria guesses
                wrong, allowing Russia into Galicia while Italy, say, attacks
                France or runs a Lepanto, he is suddenly in the embarrassing
                position of appearing hostile to Italy AND Germany, while still
                being forced to return to cover Vienna from Russia. And if Italy
                orders the Austrian Attack, Austria is cooked. This move never
                became overly popular, but if Austria is sure that Italy is
                opening to Tyrolia *and* is anti-Austrian, then it can be quite
                the stunning move.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TyrolianVariation;
