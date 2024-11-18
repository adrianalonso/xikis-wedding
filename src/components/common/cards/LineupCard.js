import React from "react";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import Youtube from "../icons/Youtube";
import Spotify from "../icons/Spotify";
import Image from "next/image";

const LineupCard = ({ cardColor, genere, img, name, socil_link }) => {
  return (
    <div className="lineup-image-wrapper position-relative">
      <div className={`lineup-image ${cardColor}`}>
        <Image src={img} className="img-fluid" alt="lineup-image" />
      </div>
      <div className="lineup-image-hover">
        <p className="author-name">{name}</p>
        <div className="line-up-hover-content">
          <h5 className="fw-medium mb-50">
            <span className="text-uppercase">{genere}</span>
          </h5>
        </div>
      </div>
      {/* -- lineup-image-hover -- */}
    </div>
  );
};

export default LineupCard;
