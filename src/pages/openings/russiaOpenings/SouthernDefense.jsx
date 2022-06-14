import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnRussia from "../../../components/returnRoutes/ReturnRussia";

const SouthernDefense = () => {
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
              <h5>The Southern Defense</h5>
              <p>
                F Stp(sc) - BOT <br />A Mos - Ukr <br />A War - Gal <br /> F Sev
                - Bla
              </p>
              <a
                href="https://diplomacyopenings.wordpress.com/russia/southern-defence"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <p className="author">Source: DiplomacyOpenings</p>
              </a>
              <p>
                The Southern Defense is the fourth most popular opening in
                Diplomacy and the most popular one for Russia, being used in
                22.4%. Appropriately name, the opening is focussed on the
                southern part of the board and has a very clear defensive
                mindset.
              </p>
              <p>
                Unlike most openings, this is one that is well suited to both
                novices and experienced players – while the opening requires
                patience and negotiation skills the tactics are simple and so
                long as Germany isn’t suicidal any resulting position is
                playable at worst.
              </p>
              <p>
                Dull but dependable and assuredly the best moves a novice
                Russian player can make, the opening has decreased in popularity
                in recent times as more exotic or adventurous options have been
                explored in response to the rampant threats of EF alliances.
                Despite the decline, there is no doubt this is one of the best
                defensive openings in Diplomacy and is arguable the best
                “wait-and-see” opening in the game from a negotiation stand
                point.
              </p>
              <p>
                There are weaknesses – in particular against Western Triple
                alliances or an aggressively anti-Austrian Italy (who may well
                get all the Austrian centres before Russia has a say, leading to
                serious mid-game problems). The critical disadvantage remains
                what it was in the 1970s and 1980s: the opening is slow and
                therefore significantly reduces Russia’s chances of an 18-centre
                victory.
              </p>
              <p>
                The pay off is a much better chance of survival into the
                mid-game and the chance to exert Diplomacy skills on the game.
                For every Russia that meekly surrenders the North to an EF or
                EFG as a result of this opening, there is another that has
                survived an Austria-Turkey alliance and come out the other side
                smiling. Perhaps the only criticism is indeed a stylistic choice
                rather than any inherent flaw.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SouthernDefense;
