import "./logo.scss";
import React from "react";
import plainLogo from "../../../assets/plain.png";
export default function Logo() {
  return (
    <div className="logo-container">
      <img src={plainLogo} alt="T-logo" className="solid-logo" />
    </div>
  );
}
