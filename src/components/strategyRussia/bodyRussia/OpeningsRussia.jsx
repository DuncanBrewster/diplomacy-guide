import React from "react";
import { NavLink } from "react-router-dom";

const OpeningsRussia = () => {
  return (
    <>
      <h5 id="openings">Openings</h5>
      <a
        href="https://en.wikibooks.org/wiki/Diplomacy/Russia"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <p className="author">Source: Wikibooks</p>
      </a>
      <p>
        Russia has the largest and most robust choice of openings out of any
        power on the board. She can attack England, by moving A Moscow to St.
        Petersburg, challenging Norway, attack Germany through Silesia, attack
        Austria through Galicia, or attack Turkey through the Black Sea, all on
        the first turn! Russia's opening position, however, is almost as
        vulnerable as Austria, and The Bear can be forcibly brought down by her
        neighbors if she is not careful, or strong enough to defend.
      </p>
      <p className="openingGroup">NORTHERN OPENINGS</p>

      <NavLink to="/octopus" style={{ textDecoration: "none" }}>
        <p className="opening">Octopus</p>
      </NavLink>
      <NavLink to="/squid" style={{ textDecoration: "none" }}>
        <p className="opening">Squid</p>
      </NavLink>


      <p className="openingGroup">SOUTHERN OPENINGS</p>

      <NavLink to="/ukrainiansystem" style={{ textDecoration: "none" }}>
        <p className="opening">Ukrainian System</p>
      </NavLink>

      <NavLink to="/southerndefense" style={{ textDecoration: "none" }}>
        <p className="opening">Southern Defense</p>
      </NavLink>
      <NavLink to="/germanattack" style={{ textDecoration: "none" }}>
        <p className="opening">German Attack</p>
      </NavLink>
    </>
  );
};

export default OpeningsRussia;
