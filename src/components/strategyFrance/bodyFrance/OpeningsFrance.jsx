import React from "react";
import { NavLink } from "react-router-dom";

const OpeningsFrance = () => {
  return (
    <>
      <h5 id="openings">Openings</h5>
      <a
        href="https://en.wikibooks.org/wiki/Diplomacy/France"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <p className="author">Source: Wikibooks</p>
      </a>
      <p>
        France has more safe and non-committing openings that can almost
        guarantee quite a few (usually two, sometimes three) builds during the
        winter of 1901. France is the only power able to reach the centers in
        Iberia in 1901, and can choose to take them calmly, or expend less
        effort capturing Spain and Portugal to attack Germany or England.
      </p>
      <p>
        France's major choice is whether to try for the Channel. If France
        manages to occupy the Channel, he can almost guarantee himself Bel by
        force, as long as he has another unit in Pic or Bur. However, forcing
        one's way into Bel is against most French theory, which says that France
        can (and should) play as docilely as possibly during the first year,
        playing England and Germany off each other, and choosing a side in 1902.
      </p>

      <p className="openingGroup">ENGLISH ATTACKS</p>

      <NavLink to="/northerndash" style={{ textDecoration: "none" }}>
        <p className="opening">Northern Dash</p>
      </NavLink>
      <NavLink to="/englishdefense" style={{ textDecoration: "none" }}>
        <p className="opening">English Defense</p>
      </NavLink>

      <p className="openingGroup">ATLANTIC OPENINGS</p>

      <NavLink to="/maginotopening" style={{ textDecoration: "none" }}>
        <p className="opening">Maginot Opening</p>
      </NavLink>
      <NavLink to="/burgundyvariation" style={{ textDecoration: "none" }}>
        <p className="opening">Burgundy Variation</p>
      </NavLink>
      <NavLink to="/vineyardvariation" style={{ textDecoration: "none" }}>
        <p className="opening">Vineyard Variation</p>
      </NavLink>
      <NavLink to="/belgianvariation" style={{ textDecoration: "none" }}>
        <p className="opening">Belgian Variation</p>
      </NavLink>

      <p className="openingGroup">MISCELLANEOUS OPENINGS</p>

      <NavLink to="/picardyopening" style={{ textDecoration: "none" }}>
        <p className="opening">Picardy Opening</p>
      </NavLink>
    </>
  );
};

export default OpeningsFrance;
