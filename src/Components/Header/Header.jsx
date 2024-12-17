import React from "react";
import styles from "./header.module.css";
import logo from "./HeaderImages/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className={styles.TopBar}>
        <div className={styles.ContactInfo}>
          <div className={styles.phone}>
            <i class="fa fa-phone" aria-hidden="true"></i>
            <a href="tel:8847065492">8847065492</a> |{" "}
            <a href="tel:9530752606">9530752606</a>
          </div>
          <div>
            <i class="fa fa-envelope" aria-hidden="true"></i>{" "}
            <a href="mailto:INFO.WEBCREATIONSIT@GMAIL.COM">
              INFO.WEBCREATIONSIT@GMAIL.COM
            </a>
          </div>
        </div>
        <div className={styles.socialMedia}>
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </div>
      </div>
      <div className={styles.NavBar}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div>
          <ul className={styles.NavItems}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
