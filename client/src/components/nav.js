import React, { useState } from "react";
import styles from "../styles/nav.module.css";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${toggle && styles.active}`}>
      <ul className={styles.desktop}>
        <li>
          <a className={styles.navLink} href="#main">
            Home
          </a>
        </li>
        <li>
          <a className={styles.navLink} href="#about">
            About
          </a>
        </li>
        <li>
          <a className={styles.navLink} href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className={styles.navLink} href="#contact">
            Contact
          </a>
        </li>
      </ul>
      <ul className={styles.mobile}>
        <li>
          <button
            className={styles.toggleBtn}
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <i className="fa-solid fa-x" aria-label="toggle menu"></i>
            ) : (
              <i className="fa-solid fa-bars" aria-label="toggle menu"></i>
            )}
          </button>
        </li>
        <li>
          <a className={styles.navLink} href="#main">
            Home
          </a>
        </li>
        <li>
          <a className={styles.navLink} href="#about">
            About
          </a>
        </li>
        <li>
          <a className={styles.navLink} href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className={styles.navLink} href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
