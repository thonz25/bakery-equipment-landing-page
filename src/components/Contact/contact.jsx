import "./contact.scss";
import { useState, useEffect, useRef } from "react";

import React from "react";
import emailjs from "@emailjs/browser";
import AnimatedLetters from "../AnimatedLetters/animate";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { faMobileAndroidAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const formRef = useRef();

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceId, templateId, formRef.current, apiKey).then(
      (result) => {
        alert("Email sent!");
        window.location.reload(false);
      },
      (error) => {
        console.log(error.text);
        alert("An error occurred, please try again");
      }
    );
  };

  return (
    <div className="container contact-page">
      <div className="text-zone contact-text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["C", "o", "n", "t", "a", "c", "t", " ", "u", "s"]}
            idx={15}
          />
        </h1>
        <p className="description">
          At <span>Trophy's Bakery Equipment</span>, we understand that
          convenience is key when it comes to purchasing bakery equipment.
          That's why we offer nationwide shipping through third-party couriers,
          ensuring that your equipment arrives safely and in a timely manner.
          Whether you're in <span>LUZON</span>, <span>VISAYAS</span> or{" "}
          <span>MINDANAO</span>. We're committed to bringing our high-quality
          bakery machines to you. Trust us to handle the logistics, and let us
          help take your bakery to the next level.
        </p>
        <div className="contact-form">
          <form ref={formRef} onSubmit={onSubmit}>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
                <input
                  type="number"
                  name="phone"
                  placeholder="Mobile number"
                  required
                />
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li>
                <textarea
                  placeholder="Message..."
                  required
                  name="text"
                ></textarea>
              </li>
              <li>
                <input
                  type="submit"
                  className="flat-button"
                  value="Send"
                ></input>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className="map-wrap">
        <div className="info-map">
          <span className="business-name"> Trophy's Bakery Equipment</span>
          Laurel st. Villaluz subd. Villarica rd. Marilao Bulacan
          <br />
          <FontAwesomeIcon icon={faMobileAndroidAlt} color="#115173" /> Smart :{" "}
          <i>+63 962-045-5148</i>
          <br />
          <FontAwesomeIcon icon={faMobileAndroidAlt} color="#115173" /> Globe :{" "}
          <i>+63 915-275-5190</i>
          <span>
            <FontAwesomeIcon icon={faFacebook} color="#115173" />
            <a href="#">Trophy's Bakery Equipment</a>
          </span>
        </div>

        <MapContainer center={[14.7752253, 120.9708927]} zoom={16}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[14.7752253, 120.9708927]}></Marker>
        </MapContainer>
      </div>
    </div>
  );
}
