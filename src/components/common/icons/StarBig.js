import React from "react";

const StarBig = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use xlinkHref="#star-icon-big">
        <symbol id="star-icon-big" viewBox="0 0 87 87">
          <path d="M38.6351 3.46604C40.366 -0.576473 46.0968 -0.576473 47.8278 3.46604L57.584 26.2508C58.0898 27.4321 59.031 28.3733 60.2123 28.8791L82.9971 38.6353C87.0396 40.3663 87.0396 46.0971 82.9971 47.828L60.2123 57.5842C59.031 58.0901 58.0898 59.0312 57.584 60.2125L47.8278 82.9973C46.0968 87.0398 40.366 87.0398 38.6351 82.9973L28.8789 60.2125C28.373 59.0312 27.4319 58.09 26.2506 57.5842L3.46582 47.828C-0.576686 46.0971 -0.576686 40.3663 3.46582 38.6353L26.2506 28.8791C27.4319 28.3733 28.373 27.4321 28.8789 26.2508L38.6351 3.46604Z" />
        </symbol>
      </use>
    </svg>
  );
};

export default StarBig;
