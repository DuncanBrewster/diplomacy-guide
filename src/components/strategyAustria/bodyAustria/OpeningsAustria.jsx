import React from "react";
import { NavLink } from "react-router-dom";

const OpeningsAustria = () => {
  return (
    <>
      <h5 id="openings">Openings</h5>
      <a
        href="https://en.wikibooks.org/wiki/Diplomacy/Austria"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <p className="author">Source: Wikibooks</p>
      </a>
      <p>
        Austria's choice of openings can be categorized in three main groups:
        the Balkan Gambit, which sends the army in Budapest and the fleet in
        Trieste south to secure Serbia and Greece, respectively, while the army
        in Vienna remains in the Austrian homeland for defense; the Hedgehog,
        which usually sends the army in Budapest after a Balkan build while
        keeping the fleet in Trieste and the army in Vienna within Austrian
        borders for defense; and miscellaneous openings, which cover attacks on
        Germany and Italy as well as specific opening systems.
      </p>
      <p className="openingGroup">THE BALKAN GAMBIT</p>

      <NavLink to="/purebalkangambit" style={{ textDecoration: "none" }}>
        <p className="opening">Pure Balkan Gambit</p>
      </NavLink>

      <NavLink to="/triestevariation" style={{ textDecoration: "none" }}>
        <p className="opening">Trieste Variation</p>
      </NavLink>

      <NavLink to="/tyrolianvariation" style={{ textDecoration: "none" }}>
        <p className="opening">Tyrolian Variation</p>
      </NavLink>

      <NavLink to="/bohemianabberation" style={{ textDecoration: "none" }}>
        <p className="opening">Bohemian Abberation</p>
      </NavLink>

      <NavLink to="/budapestvariation" style={{ textDecoration: "none" }}>
        <p className="opening">Budapest Variation</p>
      </NavLink>

      <NavLink to="/galiciavariation" style={{ textDecoration: "none" }}>
        <p className="opening">Galicia Variation</p>
      </NavLink>

      <p className="openingGroup">HEDGEHOG OPENINGS</p>

      <NavLink to="/purehedgehog" style={{ textDecoration: "none" }}>
        <p className="opening">Pure Hedgehog</p>
      </NavLink>

      <NavLink to="/alpinehedgehog" style={{ textDecoration: "none" }}>
        <p className="opening">Alpine Hedgehog</p>
      </NavLink>

      <NavLink to="/porcupine" style={{ textDecoration: "none" }}>
        <p className="opening">Porcupine</p>
      </NavLink>

      <NavLink to="/southernhedgehog" style={{ textDecoration: "none" }}>
        <p className="opening">Southern Hedgehog</p>
      </NavLink>

      <p className="openingGroup">MISCELLANEOUS OPENINGS</p>

      <NavLink to="/bluewateropening" style={{ textDecoration: "none" }}>
        <p className="opening">Blue Water Opening</p>
      </NavLink>
    </>
  );
};

export default OpeningsAustria;
