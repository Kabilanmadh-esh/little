import React, { useState } from "react";
import logo from "./icons_assets/Logo.svg";

function Nav() {
  const [menuopen, setmenuopen] = useState(false);
  const togglemenu = () => {
    setmenuopen(!menuopen);
    console.log("Menu open state:", menuopen);
  };
  return (
    <nav className={`navbar ${menuopen ? "open" : ""}`}>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <div className="menu-icon" onClick={togglemenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${menuopen ? "visible" : ""}`}>
        <li>
          <a href="/"> Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/"> Menu</a>
        </li>
        <li>
          <a href="/">Reservation</a>
        </li>
        <li>
          <a href="/">order onlinr</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
