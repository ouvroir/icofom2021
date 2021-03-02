import React from "react";

const Icon = (props) => {
  let svg;

  switch (props.type) {
    case "externalLink":
    default:
      return (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.6058 9H10.6058V10L18.9997 10L9 19.9997L9.70711 20.7068L19.6058 10.808V19H20.6058V10V9H19.6058Z"
            fill="#8350AC"
          />
        </svg>
      );
  }
};

export default Icon;
