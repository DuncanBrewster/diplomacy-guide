import React from "react";

const HelpfulResourcesTurkey = () => {
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
        <p className="author">All About Alliances</p>
      </a>
      <a
        href="http://www.diplomacy-archive.com/resources/strategy/turkey.htm"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <p className="author">Turkey Diplomacy Archive: Various Authors</p>
      </a>
      <p className="bodyHeadings">Videos</p>
      <div className="videos">
        <iframe
          title="howToTurkey"
          width="320"
          height="180"
          src="https://www.youtube.com/embed/LQMNK5vKOck"
          style={{ border: "none" }}
        ></iframe>
        <iframe
          title="howToCrimeanCrusher"
          width="320"
          height="180"
          src="https://www.youtube.com/embed/679yoQS-zsg"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </>
  );
};

export default HelpfulResourcesTurkey;
