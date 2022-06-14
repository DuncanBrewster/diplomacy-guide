import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnTurkey from "../../../components/returnRoutes/ReturnTurkey";

const PasticheOpening = () => {
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
            <ReturnTurkey />
            <div className="content">
              <h5>The Pastiche Opening</h5>
              <a
                href="https://www.diplomacyworld.net/old/pastiche.htm"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <p className="author">Author: John Torrey</p>
              </a>
              <p>
                A Con - Bul <br />F Ank - BLA <br />A Smy - H
              </p>
              <p>
                Let's say you are Turkey in a brand-new Diplomacy game.
                Naturally, you've started exchanging letters with Austria,
                Russia and Italy, but as usual. It is hard to know what to
                believe. You don't want to commit yourself by attacking Russia
                on the first move (A Smy-Arm, F Ank-Bla), but you don't think
                you can trust him either (by moving F Ank-Con). Italy could
                surprise you with a Lepanto opening, but then again he might
                have a war with France. You'll probably go for the “normal"
                opening: A Con-Bul, A Smy-Con, F Ank-Bla.
              </p>
              <p>
                The idea is to keep your options open and prevent an early
                disaster from Russia taking the Black Sea. This opening,
                however, reduces your options by locking that Ankara fleet out
                of the Aegean and Mediterranean. It is a big reason for the
                success of the Lepanto, because that fleet just has no access to
                the weak points Italy will hit first.
              </p>
              <p>
                The Pastiche opening is designed to repair the flaws in the
                normal Turkish opening. Your first moves are: A Con-Bul, A Smy H
                (!), F Ank-Bla. Because that army in Smyrna has not moved,
                neither Russia nor Austria is directly threatened. Your fall
                Diplomacy can be conducted in an atmosphere free of stress. In
                the fall, you can order: A Bul H (or -Rum), F Ank (Bla)-Con, A
                Smy-Ank (or -Arm). Telling Russia that you'll order the A
                Bul-Rum (assuming you had bounced in the Black Sea) forces him
                to support his move to Rumania, thereby leaving the Black Sea
                vacant. The army in Smyrna moves to Armenia unless Russia is
                definitely friendly.
              </p>
              <p>
                Now you have some real options. After the fall moves are
                published you should have seen enough to know whether to build
                your fleet in Smyrna -- for a southern campaign or defense-- or
                in Ankara - for an offensive in Russia. Either way, you'll have
                two fleets working together, something never possible with the
                "normal" opening.
              </p>
              <p>
                The risk -- that Russia and Austria will get together against
                your unsupported army in Bulgaria--is insignificant, at least in
                1901. If Russia is in Rumania, then you are in the Black Sea, if
                not, then they have no supported attack. After 1901, you should
                have enough diplomatic bearings to hold your own. Of course, no
                opening in itself can save you if you have no allies and your
                neighbors launch a determined attack.
              </p>
              <p>
                Few powers in Diplomacy have the possibility of choosing a major
                direction after 1901 while retaining relative freedom from
                attack. With the Pastiche opening, Turkey can have both.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasticheOpening;
