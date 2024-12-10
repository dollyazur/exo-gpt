import React from "react";
import "../assets/styles/header.scss";
import image from "../images/Header.png";

function Header() {
  return (
    <div className="header">
      <img src={image} alt="header" />
    </div>
  );
}

export default Header;
