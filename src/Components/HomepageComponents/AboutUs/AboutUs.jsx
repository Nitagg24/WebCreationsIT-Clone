import React from "react";
import styles from "./AboutUs.module.css";
import Awardimg from "./badge-a-badge-b-badge-c-web-it-4634.png";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className={styles.AboutUs}>
      <div className={styles.AboutUsDetails}>
        <h2 style={{ color: "#FF6034" }}>WE ARE WEBITIAN</h2>
        <h1 style={{ color: "#30303C" }}>
          Top-rated Web Design and Development Company
        </h1>
        <p>
          At Web Creations IT, we believe in harnessing the power of digital
          innovation to help businesses thrive in a connected world.
          Specializing in website design, development, and IT solutions, we work
          with clients to transform their ideas into seamless, user-friendly
          digital experiences. Our dedicated team of designers, developers, and
          IT experts brings expertise, creativity, and a commitment to
          excellence, ensuring that every project meets our clients’ specific
          needs and surpasses their expectations.
          <br />
          From startups to established enterprises, Web Creations IT is here to
          guide you through every step of your digital journey. Whether you need
          a visually stunning website, a secure e-commerce platform, or robust
          IT infrastructure, we leverage the latest technology to deliver
          scalable and future-proof solutions. With Web Creations IT, you’re not
          just getting a service provider but a strategic partner invested in
          your growth and success. Let’s create something extraordinary
          together. Reach out to us to explore how we can bring your digital
          vision to life.
        </p>
        <img src={Awardimg} className={styles.AwardImg} alt="Awards" />
        <button className={styles.aboutUsButton}><Link to="/about">About us <i class="fa fa-arrow-right" aria-hidden="true"></i></Link></button>
      </div>
      <div className={styles.AboutUsProjects}>
        <div className={styles.projectsAndTeam}>
          <div className={styles.Card}>
            <ul>
              <li className={styles.cardHeading}>PROJECTS</li>
              <li className={styles.cardSubHeading}>350+</li>
              <li className={styles.cardDescription}>
                our portfolio spans a range of dynamic projects that showcase
                our expertise in web design, software development, and IT
                consulting.
              </li>
            </ul>
          </div>
          <div className={styles.Card}>
            <ul>
              <li className={styles.cardHeading}>TEAM</li>
              <li className={styles.cardSubHeading}>15</li>
              <li className={styles.cardDescription}>
                our team is our greatest asset. Comprised of passionate
                professionals from diverse backgrounds, we bring together
                expertise in design, development, cybersecurity, and IT strategy
                to deliver outstanding results for our clients.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.ClientsAndYears}>
          <div className={styles.Card}>
            <ul>
              <li className={styles.cardHeading}>Clients</li>
              <li className={styles.cardSubHeading}>800+</li>
              <li className={styles.cardDescription}>
                we’re proud to work with a diverse array of clients, from
                ambitious startups to established enterprises across multiple
                industries.
              </li>
            </ul>
          </div>
          <div className={styles.Card}>
            <ul>
              <li className={styles.cardHeading}>YEARS</li>
              <li className={styles.cardSubHeading}>8+</li>
              <li className={styles.cardDescription}>
                WebCreationsIT has built a legacy of delivering reliable,
                high-quality solutions that evolve with changing technology.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
