import * as React from "react";

const FlagRussia = (props) => (
    <div className="flagR">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={800} height={500}
            viewBox="0 0 9 6"
          
            {...props}
        >
            <path fill="#fff" d="M0 0h9v3H0z" />
            <path fill="#d52b1e" d="M0 3h9v3H0z" />
            <path fill="#0039a6" d="M0 2h9v2H0z" />
        </svg>
  </div>
)

export default FlagRussia;
