import * as React from "react";

const FlagGermany = (props) => (
    <div className="flagG">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={750}
            height={400}
            viewBox="0 0 150 90"
            {...props}
        >
            <title>{"Goesch des Deutschen Kaiserreichs"}</title>
            <path fill="#D00" d="M0 0h150v90H0z" />
            <path fill="#fff" d="M0 0h150v60H0z" />
            <path d="M0 0h150v30H0z" />
            <svg
            x={45}
            y={15}
            width={60}
            height={60}
            viewBox="0 0 1000 1000"
            {...props}
            >
            <path d="M248 0c78 115 129 249 146 394-145-17-279-68-394-146v504c115-78 249-129 394-146-17 145-68 279-146 394h504c-78-115-129-249-146-394 145 17 279 68 394 146V248c-115 78-249 129-394 146 17-145 68-279 146-394z" />
            <path
                fill="none"
                stroke="#fff"
                strokeWidth={33}
                d="M295 25c70 117 115 252 127 397-145-12-280-57-397-127v410c117-70 252-115 397-127-12 145-57 280-127 397h410c-70-117-115-252-127-397 145 12 280 57 397 127V295c-117 70-252 115-397 127 12-145 57-280 127-397z"
            />
            </svg>
        </svg>
  </div>
)

export default FlagGermany;
