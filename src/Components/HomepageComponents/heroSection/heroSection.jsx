import React from "react";
import styles from "./heroSection.module.css";
import certify from "./ISO-certification-scaled-1-1280x904.webp";
import heroImage from "./girl-bro.svg";
import techImage from "./image.png";
import { Link } from "react-router-dom";

const heroSection = () => {
  return (
    <div>
      <div className={styles.heroSection}>
        <div className={styles.heroDetails}>
          <h1 className={styles.HeroHeading}>
            AWARD WINNING WEB DEVELOPMENT
            <span style={{ color: "#FF6034" }}> COMPANY</span>
          </h1>
          <h3 className={styles.HeroSectionDetails}>
            Web Creations IT is a website development company. we provide the
            best quality of services related to Wix, Weebly, WordPress,
            Squarespace, Shopify, digital marketing, and SEO services.
          </h3>
          <button className={styles.letsTalk}>
            <Link to="/contact">
              Let's Talk <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </button>
          <div className={styles.SecondHeroSection}>
            <div className={styles.NumbersAndSocialMedia}>
              <h3>
                Hotline: <span style={{ color: "#FF6034" }}> 8847065492</span> |{" "}
                <span style={{ color: "#FF6034" }}>8146952606</span>
              </h3>
              <ul className={styles.socialButtons}>
                <li>
                  <a
                    href="https://www.facebook.com/webcreationsit"
                    target="_blank"
                  >
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/webcreationsit/"
                    target="_blank"
                  >
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/webcreationsit/"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.CertifyLogo}>
              <img src={certify} alt="ISO Certification" />
            </div>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src={heroImage} alt="heroImage" />
        </div>
      </div>
      <div className={styles.TechImage}>
        <img src={techImage} alt="Technologies used by us" />
      </div>
    </div>
  );
};

export default heroSection;
