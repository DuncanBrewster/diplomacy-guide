import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnRussia from "../../../components/returnRoutes/ReturnRussia";

const Squid = () => {
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
              <h5>The Squid</h5>
              <p>
                F Stp(sc) - BOT <br />A Mos - Stp <br />A War - Ukr <br /> F Sev
                - BLA
              </p>
              <a
                href="https://diplomacyopenings.wordpress.com/russia/the-squid"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <p className="author">Source: DiplomacyOpenings</p>
              </a>
              <p>
                Russia’s third-most popular opening is only 24th overall, making
                The Squid very much an under-utilized opening. The unusual name
                is derived from the now even less common Russian opening of The
                Octopus (Squid 7.8%; Octopus 3.7%) with the premise being that
                Russia is sticking a tentacle in every direction it can.
              </p>
              <p>
                For an opening that occurs in less than 1 in 12 games the
                results are remarkable – the correlation with games where Russia
                wins is strong as is the propensity to get two builds in the
                first year.
              </p>
              <p>
                Galicia being left open seems to be a weakness, but it is one
                that is hard for Austria to exploit, while on Russia’s behalf it
                is a fine demonstration of a desire to work together. In the
                North, England is going to be annoyed but even there a peace can
                still be negotiated. Turkey isn’t in the Black Sea and the move
                to Armenia will look weak if Russia and Austria move toward an
                alliance where Galicia is a non-issue. It’s hard to find genuine
                reasons why this opening should occur so rarely.
              </p>
              <p>
                Some of the best players in the world love the St Petersburg
                opening, and even among those who don’t use it often it is a
                highly respected move when observed. While there is no
                consensus, a plurality of opinion would suggest this is the best
                opening move for Russia – far superior to more popular options.
              </p>
              <p>
                The most striking benefit is the Northern pressure applied to
                England, a move that is likely to greatly aid the German and (in
                theory) strengthen that critical relationship in the neglected
                Northern Triangle. The opening is likely to make Russia look
                like a formidable target to attack rather than exposing a
                weakness. The Octopus, with the move to Galicia, may be even
                better in achieving this impression.
              </p>
              <p>
                Are there disadvantage? Yes. A weak German may be convinced to
                join an ill-advised EFG alliance; an aggressive Austria might be
                keen to commit to an equally short-sighted tilt toward Moscow; a
                crafty English player may require another unit to be built in
                the North, reducing the efficacy of the “tough target” advantage
                the opening can provide.
              </p>
              <p>
                Despite these issues, when all is said and done, this is the
                master level opening that, when player in the right
                circumstances, places Russia in an outstanding position.
                Certainly better than the rest of the top five openings for
                Russia, this is arguably the one opening in the game of
                Diplomacy that you should study and learn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Squid;
