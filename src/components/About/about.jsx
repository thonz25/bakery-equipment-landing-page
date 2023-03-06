// import "./about.scss";

import React from "react";
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters/animate";

export default function About() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const arr = ["A", "b", "o", "u", "t", " ", "u", "s"];
  console.log(letterClass);
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <div className="container about-page">
      <div
        className="
        text-zone"
      >
        <h1>
          <AnimatedLetters letterClass={letterClass} strArray={arr} idx={15} />
        </h1>
        <div className="card">
          <h2>Restoration</h2>
          <p>
            At our bakery equipment business, we understand that every bakery
            has unique needs and preferences when it comes to their equipment.
            That's why we offer a made-to-order
          </p>
        </div>
        <div className="card">
          <h2>Restoration</h2>
          <p>
            At our bakery equipment business, we understand that every bakery
            has unique needs and preferences when it comes to their equipment.
          </p>
        </div>
        <div className="card">
          <h2>Restoration</h2>
          <p>
            At our bakery equipment business, we understand that every bakery
            has unique needs and preferences when it comes to their equipment.
          </p>
        </div>
      </div>
    </div>
  );
}
