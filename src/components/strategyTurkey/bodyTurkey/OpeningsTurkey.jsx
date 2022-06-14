import React from "react";
import { NavLink } from "react-router-dom";

const OpeningsTurkey = () => {
  return (
    <>
      <h5 id="openings">Openings</h5>
      <a
        href="https://en.wikibooks.org/wiki/Diplomacy/Turkey"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <p className="author">Source: Wikibooks</p>
      </a>
      <p>
          Turkey has by far the smallest opening book out of any Great Power.
          The army in CON always goes to Turkey's one natural SC, and the fleet
          in ANK almost always heads to BLA, whether Russia has agreed upon a
          bounce or not. Turkey fundamentally has two choices: attack Russia
          immediately with A SMY - ARM, or attempt to gain two builds with A SMY
          - CON.
        </p>
      <p className="openingGroup">COMMON OPENINGS</p>

      <NavLink to="/russianattack" style={{ textDecoration: "none" }}>
        <p className="opening">Russian Attack</p>
      </NavLink>

      <NavLink to="/bulgarianpush" style={{ textDecoration: "none" }}>
        <p className="opening">Bulgarian Push</p>
      </NavLink>

      <p className="openingGroup">MISCELLANEOUS OPENINGS</p>

      <NavLink to="/antilepanto" style={{ textDecoration: "none" }}>
        <p className="opening">Anti Lepanto</p>
      </NavLink>
      <NavLink to="/pasticheopening" style={{ textDecoration: "none" }}>
        <p className="opening">Pastiche Opening</p>
      </NavLink>

    </>
  );
};

export default OpeningsTurkey;
