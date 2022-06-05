import React, { useState } from "react";
import "./nav.css";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${toggle && "active"}`}>
      <ul className="desktop">
        <li>
          <a className="nav-link" href="#main">
            Home
          </a>
        </li>
        <li>
          <a className="nav-link" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="nav-link" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
      <ul className="mobile">
        <li>
          <button className="toggle-btn" onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <i className="fa-solid fa-x" aria-label="toggle menu"></i>
            ) : (
              <i className="fa-solid fa-bars" aria-label="toggle menu"></i>
            )}
          </button>
        </li>
        <li>
          <a className="nav-link" href="#main">
            Home
          </a>
        </li>
        <li>
          <a className="nav-link" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="nav-link" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
