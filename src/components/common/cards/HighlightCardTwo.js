import Link from "next/link";
import React from "react";

const HighlightCardTwo = ({ title, desc, icon, styleNum }) => {
  // styleNum 0 from Home page 3 and Home page 6
  // styleNum 1 from About-us page

  // ----- Change classname define in home page
  let titleClass;
  switch (styleNum) {
    case 0:
      titleClass = "custom-sans-serif";
      break;
    case 1:
      titleClass = "custom-jakarta";
      break;
    default:
      break;
  }
  // ----- Change classname define in home page

  return (
    <div className="col">
      <Link
        href="#"
        className="highlights-item-3 text-decoration-none position-relative d-flex flex-column gap-20 px-15 px-lg-20 py-20 py-lg-25"
      >
        <div className="highlights-icon-style-1">
          {icon} <h3 className={`fw-extra-bold mb-0 ${titleClass}`}>{title}</h3>
        </div>

        <p className="custom-jakarta custom-font-style-2">{desc}</p>
      </Link>
    </div>
  );
};

export default HighlightCardTwo;
