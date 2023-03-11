import "./about.scss";

import React from "react";
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters/animate";
import face3 from "../../assets/Dough_roller2.png";
import face1 from "../../assets/Bread_slicer.png";
import face2 from "../../assets/Dough_mixer_kneeder.png";
import face6 from "../../assets/Oven2.png";
import face4 from "../../assets/Dough_roller.png";
import face5 from "../../assets/Bakery_oven_12tray.png";

export default function About() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div
          className="
        text-zone"
        >
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "u", "s"]}
              idx={15}
            />
          </h1>
          <div className="card">
            <h2>Restoration</h2>
            <p>
              We can restore your equipment to like-new condition. We can
              diagnose and repair any issue you may be experiencing with your
              equipment. From routine maintenance to complex repairs, we have
              the knowledge and expertise to get your equipment running smoothly
              again.
            </p>
          </div>
          <div className="card">
            <h2>Made to order</h2>
            <p>
              We understand that every business has unique needs. That's why we
              offer made-to-order equipment that's tailored to your specific
              requirements. Let us know what you need and we'll build it for
              you.
            </p>
          </div>
          <div className="card">
            <h2>Home service</h2>
            <p>
              Don't have time to bring your equipment to us? No problem. We
              offer home service repairs, so you can get back to work without
              having to leave your business. We'll come to you and get the job
              done right the first time.
            </p>
          </div>
        </div>

        <div className="stage-cube-cont">
          <div className="cube-spinner">
            <div className="face1">
              <img src={face1} alt="Bread slicer image" />
              {/* #dd0031 */}
            </div>
            <div className="face2">
              <img src={face2} alt="dough mixer image" />
              {/* #f06529 */}
            </div>
            <div className="face3">
              <img src={face3} alt="dough roller image" />
              {/* #28a4d9 */}
            </div>
            <div className="face4">
              <img src={face4} alt="dough roller image" />
              {/* #5ed4f4 */}
            </div>
            <div className="face5">
              <img src={face5} alt="Oven image" />
              {/* #efd81d */}
            </div>
            <div className="face6">
              <img src={face6} alt="Oven image" />
              {/* #ec4d28 */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
