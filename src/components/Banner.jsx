import React from "react";
import "../assets/styles/banner.scss";
import image from "../images/Image_1.png";

function Banner() {
  return (
    <div className="banner">
      <h2>coucou banière</h2>
      <img src={image} alt="paysage de la banniere" />
    </div>
  );
}
export default Banner;
