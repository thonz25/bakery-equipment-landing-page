import React, { useState } from "react";
import "./index.scss";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(true);

  const onClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="app">
      <div className="page">
        <Sidebar state={isOpen} />
        <button onClick={onClick}>
          <span
            style={{
              animation: isOpen
                ? "open-Top 0.3s backwards"
                : "open-Top 0.3s  forwards",
            }}
          ></span>
          <span style={{ opacity: isOpen ? "1" : "0" }}></span>
          <span
            style={{
              animation: isOpen
                ? "open-Bot 0.3s linear backwards"
                : "open-Bot 0.3s linear forwards",
            }}
          ></span>
        </button>
        <Outlet />
      </div>
    </div>
  );
}
