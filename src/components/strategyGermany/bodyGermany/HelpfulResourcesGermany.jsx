import React from "react";

const HelpfulResourcesGermany = () => {
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
        href="http://www.diplomacy-archive.com/resources/strategy/germany.htm"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <p className="author">Germany Diplomacy Archive: Various Authors</p>
      </a>
      <p className="bodyHeadings">Videos</p>
      <iframe
        title="howToGermany"
        width="320"
        height="180"
        src="https://www.youtube.com/embed/blfHTfhDYhs"
        style={{border: "none"}}
      ></iframe>
    </>
  );
};

export default HelpfulResourcesGermany;