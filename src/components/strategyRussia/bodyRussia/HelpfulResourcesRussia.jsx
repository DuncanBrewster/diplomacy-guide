import React from "react";

const HelpfulResourcesRussia = () => {
  return (
    <>
      <h5 id="helpfulResources">Helpful Resources</h5>
      <p className="bodyHeadings">Articles</p>
      
      <a
        href="https://en.wikibooks.org/wiki/Diplomacy/Alliances"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <p className="author">Alliances: WikiBooks</p>
      </a>
      <a
        href="http://www.diplomacy-archive.com/resources/strategy/russia.htm"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <p className="author">Russia Diplomacy Archive: Various Authors</p>
      </a>
      <p className="bodyHeadings">Videos</p>
      <iframe
        title="howToRussia"
        width="320"
        height="180"
        src="https://www.youtube.com/embed/icZm_1uclx4"
        style={{border: "none"}}
      ></iframe>
    </>
  );
};

export default HelpfulResourcesRussia;