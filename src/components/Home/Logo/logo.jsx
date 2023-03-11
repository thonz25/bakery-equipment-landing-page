import "./logo.scss";
import React from "react";
import plainLogo from "../../../assets/plain.png";
export default function Logo() {
  return (
    <div className="logo-container">
      <div className="card front">
        <img src={plainLogo} alt="T-logo" className="solid-logo" />
      </div>
      <div className="card back">
        <span>Trophy's</span>

        <span>Bakery</span>

        <span>Equipment</span>
      </div>
    </div>
  );
}
