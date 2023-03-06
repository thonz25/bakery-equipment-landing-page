import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters/animate";
import Logo from "./Logo/logo";
import "./home.scss";

export default function Home() {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = ["T", "r", "o", "p", "h", "y", "'", "s"];
  const subName = ["B", "a", "k", "e", "r", "y", " "];
  const equipment = ["E", "q", "u", "i", "p", "m", "e", "n", "t"];

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={12}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={subName}
            idx={19}
          />

          <AnimatedLetters
            letterClass={letterClass}
            strArray={equipment}
            idx={16}
          />
        </h1>
        <h2>
          his error typically indicates that there is an issue with the server
          serving the JavaScript file for the Home component. Here are some
        </h2>
        <Link to="/contact" className="flat-button">
          CONTACT US
        </Link>
      </div>
      <Logo />
    </div>
  );
}
