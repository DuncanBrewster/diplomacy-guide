import React from "react";

const HelpfulResourcesFrance = () => {
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
        href="http://www.diplomacy-archive.com/resources/strategy/france.htm"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <p className="author">France Diplomacy Archive: Various Authors</p>
      </a>
      <p className="bodyHeadings">Videos</p>
      <iframe
        title="howToFrance"
        width="320"
        height="180"
        src="https://www.youtube.com/embed/yAWdrssXmXw"
        style={{border: "none"}}
      ></iframe>
    </>
  );
};

export default HelpfulResourcesFrance;
