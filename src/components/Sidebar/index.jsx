import "./sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTools, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          to="/services"
          className="service-link"
        >
          <FontAwesomeIcon icon={faTools} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/contact"
          className="contact-link"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
    </div>
  );
}
