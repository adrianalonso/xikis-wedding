import Link from "next/link";
import React from "react";

const ButtonFill = ({ children, link, className, target = undefined }) => {
  return (
    <Link
      href={link}
      target={target}
      className={`btn btn-primary btn-style-2  align-items-center d-inline-flex gap-2 mb-3 mb-md-0 ${className}`}
    >
      {children}
    </Link>
  );
};

export default ButtonFill;
