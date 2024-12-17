import React from "react";
import styles from "./Footer.module.css";
import logo from "./FooterImages/webcreationsit-white-logo.png";
import IsoImage from "./FooterImages/ISO-logos.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterContentBox}>
        <div className={styles.FooterData}>
          <div className={styles.FooterDataSection}>
            At Web Creations IT, we believe in harnessing the power of digital
            innovation to help businesses thrive in a connected world.
            Specializing in website design, development, and IT solutions, we
            work with clients to transform their ideas into seamless,
            user-friendly digital experiences.
          </div>
          <div className={styles.FooterDataSection}>
            <h2 className={styles.FooterHeading}>Follow Us</h2>
            <div className={styles.FooterSocialMedia}>
              <a href="https://www.facebook.com/webcreationsit" target="_blank">
                <div className={styles.FooterSocialMediaName}>
                  <p>
                    <i class="fa fa-facebook" aria-hidden="true"></i> Facebook
                  </p>
                </div>
              </a>
            </div>
            <div className={styles.FooterSocialMedia}>
              <a
                href="https://www.instagram.com/webcreationsit"
                target="_blank"
              >
                <div className={styles.FooterSocialMediaName}>
                  <p>
                    <i class="fa fa-instagram" aria-hidden="true"></i> Instagram
                  </p>
                </div>
              </a>
            </div>
            <div className={styles.FooterSocialMedia}>
              <a
                href="https://www.linkedin.com/in/webcreationsit/"
                target="_blank"
              >
                <div className={styles.FooterSocialMediaName}>
                  <p>
                    <i class="fa fa-linkedin" aria-hidden="true"></i> Linkdin
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className={styles.FooterDataSection}>
            <h2 className={styles.FooterHeading}>Services</h2>
            <div className={styles.FooterServices}>
              <Link href="/services">Hire Dedicated Developer</Link>
              <Link href="/services">Search Engine Optimization</Link>
              <Link href="/services">Web App Development</Link>
              <Link href="/services">Social Media Marketing</Link>
              <Link href="/services">Mobile App Development</Link>
            </div>
          </div>
          <div className={styles.FooterDataSection}>
            <h2 className={styles.FooterHeading}>Builders</h2>
            <div className={styles.FooterTechnologies}>
              <p>WordPress</p>
              <p>Squarespace</p>
              <p>Ontraport</p>
              <p>Webflow</p>
              <p>Wix</p>
            </div>
          </div>
          <div className={styles.FooterDataSection}>
            <h2 className={styles.FooterHeading}> Contact Info</h2>
            <div className={styles.FooterContactMethods}>
              <p>
                <i class="fa fa-phone" aria-hidden="true"></i>{" "}
                <a href="tel:8847065492">8847065492</a>
              </p>
              <p>
                <i class="fa fa-whatsapp" aria-hidden="true"></i>{" "}
                <a href="//api.whatsapp.com/send?phone=919530752606&text=Hey">
                  8847065492
                </a>
              </p>
              <p>
                <i class="fa fa-envelope" aria-hidden="true"></i>{" "}
                <a href="mailto:info.webcreationsit@gmail.com">
                  info.webcreationsit@gmail.com
                </a>
              </p>
              <p>
                <i class="fa fa-map-marker" aria-hidden="true"></i> Sardar
                Handloom Street, Opposite Prem Pardhan Market, near Bus stand,
                Barnala, Punjab 148101
              </p>
            </div>
          </div>
        </div>
        <div className={styles.FooterCompanyLocation}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6884.157422238395!2d75.54015059991549!3d30.377122740745957!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910f3b3f4c6a0b3%3A0x8a50a5d7e0faf471!2sWeb%20Designing%20Company%20-%20Web%20Creations%20IT!5e0!3m2!1sen!2sin!4v1730708659679!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>{" "}
        </div>
        <div className={styles.FooterImages}>
          <div className={styles.FooterImageSection}>
            <img src={logo} alt="Web Creations IT" />
            <h1 style={{color:"white"}}>ISO 9001:2015</h1>
          </div>
          <div className={styles.FooterImageSection}>
            <img src={IsoImage} alt="ISO Certified Company" />
          </div>
          <div>
            <button className={styles.FooterContactUsButton}>
              <Link to="/contact">
                Contact us <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </button>
          </div>
        </div>
        <div className={styles.FooterDisclaimer}>
          <div>We are tracking any intention of privacy</div>
          <div>Copyright © 2024 WebCreationsIT. All rights reserved</div>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
