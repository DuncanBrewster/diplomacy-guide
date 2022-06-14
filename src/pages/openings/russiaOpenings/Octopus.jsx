import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnRussia from "../../../components/returnRoutes/ReturnRussia";

const Octopus = () => {
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
              <h5>The Octopus</h5>
              <p>
                F Stp(sc) - BOT <br />A Mos - Stp <br /> A War - Gal <br /> F
                Sev - BLA
              </p>
              <a
                href="http://www.diplomacy-archive.com/resources/strategy/articles/octopus.htm"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <p className="author">Author: Richard Sharp</p>
              </a>
              <p>
                This is the name I give to the opening I regularly play as
                Russia, which is very little favoured by anyone else. It's a
                distant cousin of the Austrian 'Hedgehog' discussed in that it
                involves the same apparent wild lashing out in all directions.
              </p>
              <p>The reasoning is as follows.</p>
              <p>
                (1) Turkey's best chance of winning, and most active opening, is
                A(Con)-Bul, F(Ank)-BLA, A(Smy)-Arm - it's also by far the most
                popular, accounting for over a third of all Turkish openings
                (all such details are from 1901 as usual, with the usual
                grateful acknowledgement to Nick Bullock). This means that
                unless one has a weak link playing Turkey, the move to BLA is
                mandatory. Turkey, of course, will be informed in advance and
                asked to allow the move to succeed - he can do this in perfect
                safety, of course. Other countries will not at first be sure
                whether Russia has stabbed Turkey or not, a big advantage.
                Without surprise value, Turkey's attack on Russia becomes weak,
                though admittedly still bad for Russia - witness BW 77C, where
                Tony Ball of all people decided to go through with the attack
                despite being told I would go to BLA; result was Turkey 1st out,
                Russia 3rd out.
              </p>
              <p>
                (2) Perhaps the most important ally for Russia is Italy, at
                least in the early stages. Italy has more to gain than anyone
                from friendship with Russia. A move to Galicia is the surest way
                to gain Italy's confidence ... and of course you can take the
                precaution of telling Austria about it if you like.
              </p>
              <p>
                (3) Early on, Russia is such more likely to be involved in heavy
                fighting in the south, not the north. The north should be used,
                I reckon, to gain 1 or 2 easy, non-contentious build. for use in
                the south. Sweden will depend on Germany's good will, and
                Germany is likely to be more amenable if Turkey and Russia don't
                seem too friendly. I have no way of checking, but I bet Russia
                is more likely to be allowed Sweden when opening to BLA than
                when opening to Rum (unless, in opening to Rum, he is stabbed by
                Turkey, in which case he's in trouble anyway). Germany, whose
                arch-enemy is always England, is again more likely to be
                friendly if Russia moves to StP, threatening Norway - this is
                excellent for Germany, since it provides a possible friend in
                the event of a Franco-British alliance, and a possible target in
                the event of an Anglo-German one.
              </p>
              <p>
                (4) England may well be persuaded to look kindly on the idea of
                letting Russia have Norway. If England is going to attack France
                from the start, a promising line, the presence of a Russian army
                in Norway is reassuring and harmless. It guarantees that Germany
                will not keep Sweden very long if he does get it, and will thus
                offer Germany encouragement to help England's attack on France.
              </p>
              <p>
                That's the case for the defense. Note that Russia has retained
                maximum flexibility by sending each of his 4 units towards a
                potential gain - compare the unaccountably popular Mos-Sev,
                War-Ukr, Sev-Rum variation, where Russia cannot possibly gain
                more than 2 builds, and consequently may well gain none at all.
                Of course, Russia doesn't want four builds - that’s asking for
                trouble - but he does want to keep the options open until it
                becomes clear who his friends are.
              </p>
              <p>
                The attitude of England is critical, of course. If he is adamant
                that he wants Nwy for himself, there is something to be said for
                abandoning the Octopus in favour of the quite sound War-Gal,
                Mos-Ukr, Sev-BLA, still the most popular of all Russian
                openings. But now Italian aid against Austria is going to be
                vital, because gains, in the north are limited, and a conflict
                with England is virtually certain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Octopus;
