import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnItaly from "../../../components/returnRoutes/ReturnItaly";

const TyrolianLepanto = () => {
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
              <h5>The Tyrolian Lepanto</h5>
              <a
                href="https://tiggy0077.tripod.com/johnsdiplom/id18.html"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <p className="author">Author: Leif Bergman</p>
              </a>
              <p>
                F Nap - ION <br />A Ven - Tyr <br />A Rom - Apu
              </p>
              <p>
                I have taken three solo wins with Italy in tournament play and
                they have all been won using the same basic strategy. The
                talking goes as follows.
              </p>
              <p>
                To Turkey: I will open with a Lepanto, but if you don't move
                your fleet to Constantinople the first move , I will do
                something else (crush Austria with you). Point out your army in
                Tyrolia and he will think that you are a nice guy.
              </p>
              <p>
                To Austria-Hungary: I will do a Lepanto so that we can take on
                the evil Turk and share his centers. My army in Tyrolia is to
                help you protect Vienna against Galicia and to help Germany
                against the possible French move to Burgundy. If the Austrian
                player is a good player, he will believe you, and will play along
                in the Lepanto. Another thing Austria-Hungary should do is move
                Budapest to Rumania. If it succeeds, it is good for the Lepanto
                momentum, and if it doesn't succeed Russia still has to take it
                by force in the Fall and that, you point out, leaves Galicia
                open for his Vienna army.
              </p>
              <p>
                To Russia: Turkey is going to the Black Sea; lose it or protect
                it. I am going for a Lepanto and I hope that you join in. Later
                on we can together take the dual monarchy. But remember to
                protect the Black Sea.
              </p>
              <p>
                If you are successful in your diplomacy, the board will look as
                follows in the Fall.
              </p>
              <p>
                Russia: F Sev (bounced with the Turkish Ankara fleet in Black
                Sea), A Ukr and A War (bounced in Galicia with Austria'a Vienna
                army).
                <br /> Turkey: F Ank (bounced with Russia in Black Sea), A Bul
                and A Arm.
                <br />
                Austria: A Vie (bounced with Russia in Galicia), A Rum and F
                Alb.
                <br />
                Italy: A Tyr, A Apu and F Ion.
              </p>
              <p>
                Fall 1901
                <br /> In the Fall, you continue the same line of talk with
                Russia and Austria. The change comes in your talking to the
                Turk. Tell him that you will stop your Lepanto and convoy your
                army in Apulia to Greece and that you want his support. Nine
                times out of ten he will give to you, because he will see a war
                between Italy and Austria as a good thing for Turkey. In return,
                you tell him, you will not build any fleets and you will either
                help him to Serbia next year or exchange Serbia for Greece.
              </p>
              <p>Your Fall moves are:</p>
              <p>
                <br />A Tyr - Tri (or to Vienna, depending on whether you think
                the Austrian player will bounce in Galicia or try to protect
                Trieste)
                <br />A Apu - Gre (with the support from Turkey)
                <br />F Ion C A Apu - Gre
              </p>
              <p>
                At the end of the year, you build two armies -- one in Venice
                and the other in Naples. Then, in 1902, your goals are Serbia,
                Tyrolia, and Albania. The Spring moves look like this:
              </p>
              <p>
                <br />A Tri S A Gre - Ser (or A Gre S A Tri - Ser)
                <br />A Ven - Tyr
                <br />A Nap - Gre (or A Nap - Alb)
                <br />F Ion C A Nap - Apu (or into Greece)
              </p>
              <p>
                In the Fall, you take Serbia or Vienna or maybe both. If you get
                one build you build an army in either Venice or Naples. It
                depends how you feel Turkey will react to a new army in Naples,
                but this is the better build site choice for you. If a second
                build is available, you build a fleet in Rome.
              </p>
              <p>
                In 1903, you pick up Tunis and fight for Budapest, Vienna, and
                perhaps Bulgaria. Your next build is an army, which should keep
                both Turkey and France nice and unworried. You now have Greece,
                Serbia, Budapest, Trieste, Vienna, Tunis, and your home centers.
                And now it's time to begin the war with Turkey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TyrolianLepanto;
