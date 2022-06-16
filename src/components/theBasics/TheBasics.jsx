import React from "react";

const TheBasics = () => {
  return (
    <div className="bodySection">
      <h3>How To Play</h3>
      <div className="basicsQuickLinks">
        <a href="#winning" style={{ textDecoration: "none" }}>
          <h4>Winning</h4>
        </a>
        <a href="#turns" style={{ textDecoration: "none" }}>
          <h4>Turns</h4>
        </a>
        <a href="#moves" style={{ textDecoration: "none" }}>
          <h4>Moves</h4>
        </a>
        <a href="#communication" style={{ textDecoration: "none" }}>
          <h4>Communication</h4>
        </a>
        <a href="#helpfulResources" style={{ textDecoration: "none" }}>
          <h4>Resources</h4>
        </a>
      </div>
      <div className="content">
        <a
          href="https://www.backstabbr.com/how-to-play"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <p className="author" id="howToPlayCredit">Instructions courtesy of Backstabbr</p>
        </a>
        <h5 id="winning">
          Winning
        </h5>
        <p>
          As with all wargames, your goal is to express your dominion over men
          by crushing all who oppose you. There are two ways to do this.
        </p>

        <p>
          • Solo Victory <br />
          In order to achieve a solo victory, simply be the first power to hold
          18 supply centers. Why, it could hardly be simpler!
        </p>

        <p>
          • Shared Victory
          <br />
          Alas, sometimes pesky other players will prohibit you from achieving
          victory all by yourself and in these instances you may wish to share
          victory. Monty Python's Black Knight said it best: "Alright then,
          let's call it a draw."
        </p>
        <p>
          Shared victory is agreed upon by all the powers still present on the
          board. In Backstabbr, this is achieved by using the Victory Condition
          dropdown box in the upper right corner of your game screen. All powers
          wishing to share the victory must have their victory condition set to
          match the number of players splitting victory, and any remaining
          powers must have their victory condition set to "Surrender." A win
          will be awarded at the next turn adjudication. Remember: Powers may
          lie about their victory condition and the game will continue!
        </p>
        <p>
          Ex: Turkey, Russia, France, and Italy are the only active powers
          remaining in a game. Turkey, Russia, and France have agreed to split
          victory, and Italy has agreed to surrender. If Turkey, Russia, and
          France all set their victory condition to "3-Way Victory", they will
          win as soon as either Italy is eliminated or as soon as Italy sets
          their victory condition to "Surrender."
        </p>
        <h5 id="turns">
          Turns
        </h5>
        <p>
          There are three different seasons in a Diplomacy year, and three
          different types of turns. They look like this:
        </p>
        <p>
          • Spring <br />
          There are two phases here: First is the order phase, where you
          communicate with the other players via press and issue commands to
          your units. Once those orders are submitted, the system processes all
          the orders at the same time. Then, if any units are dislodged from
          their location, there is a second phase where players issue orders for
          that unit to either retreat or disband.
        </p>
        <p>
          • Fall <br />
          Same as the spring. Again, there is an orders phase followed by a
          retreat phase (if necessary).
        </p>
        <p>
          • Winter <br />
          At the beginning of winter, control of supply centers shifts hands.
          Any supply centers with units occupying them shift to the control of
          the power that controls said unit. Any supply centers left unoccupied
          do not change ownership. During this season, players issue orders on
          which units they would like created or disbanded, depending on the
          number of supply centers they control. Units may only be built in the
          "home" supply centers a power starts with, regardless of their
          expansion.
        </p>
        <p>Some additional notes about the particular types of turns:</p>
        <p>
          • Order Phase <br />
          During this phase players may issue orders to their units and
          communicate with other players. These may be called the "Spring Order
          Phase" or the "Fall Order Phase."
        </p>
        <p>
          • Retreat Phase <br />
          This phase occurs immediately after any order phase in which a power
          had a unit forcefully dislodged from their position. That power must
          issue orders to that unit to either retreat to an unoccupied adjacent
          territory or to disband. (Note: A unit may not retreat to a territory
          if it failed to move there in the order phase and "bounced" nor if the
          attacking force that dislodged the unit came from that territory.)
          These may be called the "Spring Retreat Phase" or the "Fall Retreat
          Phase." Press is disabled in this phase.
        </p>
        <p>
          • Build Phase <br />
          The build phase occurs only in winter. They are basically synonymous.
          Press is disabled in this phase.
        </p>
        <h5 id="units">
          Units
        </h5>
        <p>There are two types of units in Diplomacy.</p>
        <p>
          • Army <br />
          The basic military unit, armies may occupy any land tile. In
          Backstabbr, they are represented by a circle.
        </p>
        <p>
          • Fleet <br />
          These units can traverse the seas. They may occupy any water tile, as
          well as any coastal land tile. They may also be used to transport army
          units across water. Fleets may only be built in home supply centers
          with a coast. In Backstabbr, they are represented by a triangle.
        </p>
        <h5 id="moves">
          Moves
        </h5>
        <p>
          During the Order phase, powers issue one of four different move
          commands to each of their units.
        </p>
        <p>
          • Move/Attack <br />A unit may move freely into any unoccupied
          adjacent tile. Army units may only move to land tiles, whereas fleets
          may move into either water tiles or land tiles with a coast. To order
          a Move/Attack in Backstabbr, click on the tile containing the unit you
          wish to order and then click on the tile you wish it to move to. Some
          land tiles have two coasts that are considered to be separate. These
          tiles are Spa, Stp, and Bul. These coasts are considered to be
          separate tiles for the purposes of movement and support, and are
          marked accordingly on the map. For example, a fleet that is stationed
          on the north coast of Spa may not then move to Mar, WES, or LYO.
        </p>
        <p>
          Similarly, Kie and Con look like they might have two coasts, but are
          considered to have only one. A canal is marked on the map to help you
          remember this.
        </p>
        <p>
          When a unit attempts to move into a tile occupied by another unit,
          this is considered an attack. Resolving these is a critical element of
          the game and will be covered below.
        </p>
        <p>
          SPECIAL NOTE: The Backstabbr engine is designed to allow you to submit
          orders that are NOT legal. For example, you may order an English army
          in Lon to move to Mos, but that movement will fail on adjudication.
          This is an intentional design feature intended to facilitate lying. If
          you are unsure about the validity of a move, please test it out in the
          Sandbox.
        </p>
        <p>
          Move orders are commonly expressed in text as following:
          <br />A Kie - Ber (An army moving from Kie to Ber)
          <br /> F NTH - Den (A fleet moving from NTH to Den)
        </p>
        <p>
          • Hold <br />A unit may hold its ground. To order a Hold in
          Backstabbr, click on the tile containing the unit you wish to order
          and then click on that same tile a second time.
        </p>
        <p>
          Hold orders are commonly expressed in text as following:
          <br /> A KIE H (An army in Kie will hold)
          <br /> F NTH H (A fleet in NTH will hold)
        </p>
        <p>
          • Support <br />A unit may support either the Move/Attack order or
          Hold order of another unit. In order to be eligible for this, the
          supporting unit must capable of moving itself to the tile in which the
          support move ends. This means that armies may not support manuevers on
          water tiles, and fleets support manuevers on land tiles only if they
          are coastal. To order a support move in Backstabbr, click the tile
          containing the unit you wish to order, then press the S key on your
          keyboard, then click on the tiles representing the move you wish to
          support. (Two different tiles for a move, the same tile twice for a
          hold.) There is also a button for issuing support orders underneath
          the map if you don't have a keyboard or are playing from a mobile
          device.
        </p>
        <p>
          Multiple units may support the same move, and powers may support the
          movements of other powers. A unit that has issued a move order may not
          receive any hold support, however.
        </p>
        <p>
          Example: In Germany, Kie may support a movement from Pru into Ber, and
          it may also support a unit in Ber holding. It may not support a hold
          in Pru nor a move from Ber - Pru.
        </p>
        <p>
          Support orders are commonly expressed in text as following:
          <br />A Kie S Pru - Ber (An army in Kie supports a unit in Pru moving
          into Ber)
          <br />A Kie S Ber H (An army in Kie supports a unit in Ber holding)
          <br />F NTH S Swe - Den (A fleet in NTH supports a unit in Swe moving
          into Den)
          <br /> F NTH S Den H (A fleet in NTH supports a unit in Den holding)
        </p>
        <p>
          • Convoy
          <br />A fleet unit may transport army units across water. Fleets may
          only do this when they are on water territories. To order a convoy
          move in Backstabbr, click the tile containing the unit you wish to
          order, then press the C key on your keyboard, then click on the tiles
          representing the beginning and destination of the convoy. There is
          also a button for issuing convoy orders underneath the map if you
          don't have a keyboard or are playing from a mobile device.
        </p>
        <p>
          Multiple fleets may be used to carry out a convoy. For example, if
          England possessed an army in Lon and fleets in ENG and MAO, he could
          convoy the army from Lon to Por if both fleets issued the same convoy
          command. Convoys may be disrupted if any one of the fleets carrying
          out a convoy is dislodged.
        </p>
        <p>
          Convoy orders are commonly expressed in text as following:
          <br />F NTH C Lon - Nwy (A fleet in NTH convoys an army from Lon to
          Nwy)
          <br />A Lon - Nwy (The order for the army wishing to be convoyed in
          this scenario)
        </p>

        <h5 id="resolvingAttacks">
          Resolving Attacks
        </h5>
        <p>
          In Diplomacy, resolving army move orders is referred to as
          "adjudication." A move/attack is contested anytime an opposing power
          is either already in that territory or moving to it at the same time.
          For the purposes of resolving an attack, every unit involved in the
          attack is considered to have a power of one, and the unit with the
          greatest power wins the attack. If the attack powers are the same,
          nothing changes.
        </p>
        <p>
          Examples (all examples occur between Germany & Austria and assume
          opposing powers):
        </p>
        <p>
          • An army in Boh attacks an army in Mun with no support for either
          unit. They have the same attack power, so it is a draw. Both units
          remain in their starting territory.
        </p>
        <p>
          • An army in Vie and an army in Mun attack an unoccupied Boh at the
          same time with no support. They have the same attack power, so it is a
          draw. Both units "bounce" off each other and return to their starting
          territory.
        </p>
        <p>
          • An army in Boh attacks an army in Mun, and Boh has support from an
          army in Tyr. Boh has an attack power of 2 and Mun has an attack power
          of 1, so Boh wins and Mun is dislodged.
        </p>
        <p>
          • An army in Vie and an army in Mun attack Boh at the same time. The
          move/attack from Vie to Boh has support from Tyr and Gal, and the
          move/attack from Mun has support from Sil. Vie has attack power 3 and
          Mun has attack power 2, so Vie wins. Vie moves into Boh and Mun stays
          put.
        </p>
        <p>
          • Armies in Vie and Mun are attacking Boh exactly as in the example
          above with support from 2 and 1 adjacent countries respectively. This
          time, however, another army intervenes by attacking Gal from War.
          Neither Gal nor War will move since they both have attack power 1, but
          Gal's support of A Vie - Boh is cut. Now both Vie and Mun have attack
          power 2, so they bounce off each other as well.
        </p>
        <p>
          Units providing support may have their support cut if they are
          attacked by an opposing power, even if they are not dislodged from
          their territory. A unit that is under attack cannot break support of
          units supporting that attack.
        </p>

        <h5  id="communication">
          Communication
        </h5>
        <p>
          "Diplomatic press" is a form of official communication between foreign
          powers. In online Diplomacy games, "press" is the term used to
          describe in-game messaging between players. On any Backstabbr game
          screen there will be a Press tab in the navbar; clicking on it will
          show a screen where you can create new message threads with one or
          more other powers and view message threads already in progress.
        </p>
        <p>
          Press on Backstabbr is already organized into threads analogous to
          email threads, so you don't need to create a new thread for each
          message in an ongoing communication.
        </p>
        <h5 id="helpfulResources">
          Helpful Resources
        </h5>
        <p className="bodyHeadings">Articles</p>
        
        <a
          href="https://media.wizards.com/2015/downloads/ah/diplomacy_rules.pdf"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <p className="author">The Official Avalon Hill Rules</p>
        </a>
        <a
          href="http://www.diplomacy-archive.com/god.htm"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <p className="author">The Game of Diplomacy: Richard Sharp</p>
        </a>
        <a
          href="https://brotherbored.com/tag/solo-win-tips"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <p className="author">Solo Win Tips: BrotherBored</p>
        </a>
        <a
          href="https://brotherbored.com/diplomacy-onions-1-politics"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <p className="author">Politics, Tactics, and Strategy: BrotherBored</p>
        </a>
        <a
          href="https://brotherbored.com/guest-post-advanced-diplomacy-maneuvers"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <p className="author">Advanced Diplomacy Maneuvers: BrotherBored</p>
        </a>
        <p className="bodyHeadings">Community</p>
        <a
          href="https://diplobn.com"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <p className="author">Diplomacy Broadcast Network</p>
        </a>
        <a
          href="https://www.backstabbr.com"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <p className="author">Play Diplomacy On Backstabbr</p>
        </a>
        <a
          href="https://www.reddit.com/r/diplomacy"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <p className="author">Diplomacy Subreddit</p>
        </a>
        <p className="bodyHeadings">Videos</p>
        <div className="videos">
          <iframe title="howToVideo"
            width="320"
            height="180"
            src="https://www.youtube.com/embed/l53oL0ptt7k"
            style={{ border: "none" }}
          ></iframe>
          <iframe title="thirteenTipsVideo"
            width="320"
            height="180"
            src="https://www.youtube.com/embed/duUGPtbxx5g"
            style={{ border: "none"}}
          ></iframe>
          <iframe title="strategyVideo"
            width="320"
            height="180"
            src="https://www.youtube.com/embed/v0H05gs3_C4"
            style={{ border: "none"}}
          ></iframe>
          <iframe title="strategyVideo"
            width="320"
            height="180"
            src="https://www.youtube.com/embed/LABnxdvCzzQ"
            style={{ border: "none"}}
          ></iframe>
          <iframe title="strategyVideo"
            width="320"
            height="180"
            src="https://www.youtube.com/embed/sspm5v88pRM"
            style={{ border: "none"}}
          ></iframe>
          <iframe title="strategyVideo"
            width="320"
            height="180"
            src="https://www.youtube.com/embed/fqRBRqtvSFY"
            style={{ border: "none"}}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TheBasics;
