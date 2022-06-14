import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnRussia from "../../../components/returnRoutes/ReturnRussia";

const GermanAttack = () => {
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
              <h5>The German Attack</h5>
              <p>
                F Stp(sc) - BOT <br />A Mos - Ukr <br />A War - Sil <br /> F Sev
                - Bla
              </p>
              <a
                href="http://www.diplomacy-archive.com/resources/strategy/articles/german_attack.htm"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <p className="author">Author: John Dennett</p>
              </a>
              <p>
                The Russian opening A(War)-Sil is comparatively rare, but
                provided the right factors are in place, underrated. The
                pundits' advice over the years has been to advise Russian
                players to forget about the centre and concentrate on the
                eastern triangle of Austria, Russia and Turkey. Many articles
                that have been written go into great detail offering a wealth of
                options for each Great Power in S01, but none favour the German
                attack.
              </p>
              <p>
                Don Turnbull, the father figure of British Diplomacy, suggested
                that Russian openings should avoid an attack on the central
                front, because it would extend Russia's geographical
                disadvantage by leaving captured territory open to attack from
                the north, south and west. Rod Walker, the esteemed American
                Diplomacy scribe, offered no more than this: "This is an
                anti-German opening." Richard Sharp, author of The Game of
                Diplomacy wrote, "Russia's most promising attitude to Germany is
                one of frank cowardice; secure Norway and Sweden, if possible,
                and stop at that." So much for the thoughts of our tutelaries.
              </p>
              <p>
                The premise that Russia must be entrenched in the Eastern
                Triangle is so firmly fixed, the members of the Western
                equivalent would not consider Russia as a suitable ally so early
                on in the game. England wants Norway and that's about it,
                especially as there are so many supply centres convenient to the
                North Sea. St. Petersburg is possible, but beyond that would be
                over-stretching the Royal Navy's resources. Germany could make
                the very rare Barbarossa Attack by opening to Silesia, but most
                players have never seen this played (although 4.36% of Germany's
                do have a go). Germany has so many easy targets within reach,
                that an eastern campaign would only leave the Low Countries
                going begging to rivals. As Richard Sharp wrote, "But why, for
                Heaven's sake, pick a fight in this [Silesia] particularly
                slow-burning area?" France often opens with moves simply to
                scoop up Spain and Portugal, while making up her mind on the
                choice of ally. France rarely allies with Italy at this stage,
                but more usually chooses either England or Germany; never
                Russia! Perhaps it is because Russia is perceived as having
                nothing to offer France, strange really as Munich is all that
                separates Burgundy from Silesia.
              </p>
              <p>
                From Russia's point of view a move to Silesia means that the
                decision to choose, if at all, between Austria and Turkey for an
                ally can be postponed, with an army in Ukraine and the southern
                fleet on stand-by. Turkey may be coerced into the dreaded
                Juggernaut and may even assist Russia's quest for Rumania. The
                transfer of Russia's third unit away from the southern struggle
                may mean that the conquest or retention of Rumania need help
                from one of Russia's neighbors - provided such help was
                available, the question whether it was Austria or Turkey (or
                both) may help determine the ally question. A stand off in the
                Black Sea with Turkey is so much part and parcel of most
                openings that it can easily be dismissed as a ruse to deceive.
              </p>
              <p>
                The all-important analysis of the Spring 1901 letters should
                tell the Russian player something of what to expect, especially
                if he receives a nasty little letter from Germany about not
                getting Sweden! the possibility of making the German Attack
                relies on getting the right signals. Sooner or later, all the
                right signs for a successful attack must come together. Firstly
                Austria and Turkey must distrust each other totally; this
                shouldn't be too difficult, as the two countries are ill-suited
                as allies. The main point here is that Austria must be steered
                away from Galicia. If this cannot be achieved, then the better
                move would be to use the Southern Defense with an agreed
                stand-off and, possibly try A(War)-Sil on the Autumn turn.
                Austria's opening is certainly the deciding factor. Italy can
                help by making the most popular opening, the Tyrolean Attack,
                with A(Ven)-Tyr, A(Rom)-Ven and F(Nap)-ION. Alert Austria to
                Italy's intentions and perhaps the Viennese army will be held
                for home defense. An Italian army in Tyrolia may even be used
                for a joint attack on Munich.
              </p>
              <p>
                Germany can be relied upon to order A(Ber)-Kie as this is the
                natural follow-up to either F(Kie)-Den or Hol. With the Russian
                army in Silesia able to strike at Berlin or Munich, the question
                for Germany's autumn move is whether to protect Berlin or Munich
                with A(Kie)? Statistically, Germany moves A(Mun)-Ruh 56.34% of
                the time and the A(Ruh) is now in a dilemma of whether to press
                on into Holland or Belgium (usually Holland) or to protect
                Munich. To send one army back for defense is humiliating enough,
                but to send two armies back, well my guess is that Germany would
                take pot luck and run for Holland.
              </p>
              <p>
                The autumn presents an opportunity for Anglo-Russian diplomacy,
                as the Russian fleet sails, not into Sweden (if Germany is in
                Denmark, you haven't a hope of getting Sweden now), but into the
                Baltic. An Anglo-Russian offensive is possible as Germany would
                have moved up into Sweden unopposed, leaving Denmark naked.
              </p>
              <p>
                No doubt the risks are great when making the German Attack, but
                the element of surprise and novelty would appeal to those
                willing to try something adventurous. I wonder how German
                players would react to this unexpected attack and it would be
                interesting to find out! Why not try it? If you have been stood
                out of Sweden for no other reason than schadenfreude, this
                tactic might tempt you to let Germany take Sweden while you take
                Berlin. But Munich is the real goal with a joint attack from
                Tyrolia or Burgundy. A further A(War)-Sil in spring 1902 (if you
                can afford it) should secure the early gain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GermanAttack;
