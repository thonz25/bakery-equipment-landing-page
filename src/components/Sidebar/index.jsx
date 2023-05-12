import "./sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTools, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar(props) {
  const [screenSize, setSCreenSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleSize = () => setSCreenSize(window.innerWidth);

    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);
  console.log(screenSize);
  return (
    <div
      className="nav-bar"
      style={{
        right:
          screenSize >= 700
            ? null
            : screenSize < 700 && props.state
            ? "-40%"
            : "-10%",
      }}
    >
      <Link className="logo" to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeClassName="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeClassName="active"
          to="/services"
          className="service-link"
        >
          <FontAwesomeIcon icon={faTools} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeClassName="active"
          to="/contact"
          className="contact-link"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
    </div>
  );
}
