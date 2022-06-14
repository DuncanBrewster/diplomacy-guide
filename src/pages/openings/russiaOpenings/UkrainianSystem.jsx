import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnRussia from "../../../components/returnRoutes/ReturnRussia";

const UkrainianSystem = () => {
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
            <ReturnRussia />
            <div className="content">
              <h5>The Ukrainian System</h5>
              <p>
                F Stp(sc) - BOT <br />A Mos - Ukr <br />A War - Gal <br /> F Sev
                - Rum
              </p>
              <a
                href="https://diplomacyopenings.wordpress.com/russia/ukrainian-system"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <p className="author">Source: DiplomacyOpenings</p>
              </a>
              <p>
                Russia’s second-most popular opening, the Ukrainian System, is
                18th for the game, being used in only 9.2% of games. Identical
                to the most popular one, the Southern Defence, apart from the
                move of Sevastopol is shares many of the same characteristics,
                though the Black Sea situation is very different as a result.
              </p>
              <p>
                In the simplest terms, it’s a risk that makes life easier in
                Fall 1901 if it works. It doesn’t consider the ongoing problem
                of F Rum being poorly placed to attack either Austria or Turkey,
                making it a short term statement of positive intent towards
                Turkey only. A wise Austria will not be panicked by this move.
              </p>
              <p>
                If Turkey does go to Black Sea, or worse to both Black Sea and
                Armenia, then Russia has immediate and serious problems, making
                this a questionable risk that is not broadly recommended, making
                its popularity somewhat a mystery.
              </p>
              <p>
                The logic of the situation breaks down the opening sufficiently
                for most good players to write off the opening. If Russia and
                Turkey are allied, then an army (not a fleet) in Rumania is
                essential; if Russia and Austria (or Austria and Turkey) are
                allied, then a bounce in the Black Sea is essential. There’s
                just no case for moving F Sev – Rum.
              </p>
              <p>
                This extends to theoretical discussion that F Sev h is in fact a
                better move. That should say it all when it comes to considering
                this opening; Richard Hucknall was right: it’s awful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UkrainianSystem;
