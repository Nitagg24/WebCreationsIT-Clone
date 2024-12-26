import React from "react";
import styles from "./WhoWeAre.module.css";
import WhoWeAreImg from "./WhoWeAreImages/imgpsh_fullsize_anim-19.png";

const WhoWeAre = () => {
  return (
    <div className={styles.WhoWeAre}>
      <div className={styles.WhoWeAreContent}>
        <div className={styles.WhoWeAreDetailsSection}>
          <h4 className={styles.WhoWeAreDetailsHeading}>WHO WE ARE</h4>
          <h1 className={styles.WhoWeAreDetailsSubHeading}>
            We are a creative digital agency based in India.
          </h1>
          <p className={styles.WhoWeAreDetails}>
            We are a team of top talent delivering enterprise solutions
            globally. we evolve with the advancement in technology because we
            believe in making our technology as your innovation.
          </p>
          <p className={styles.WhoWeAreDetails}>
            Our experts provide a wide range of services including app design,
            web development, digital marketing, ecommerce solutions and cloud
            development. We stay updated with the technology to build innovative
            digital products that meet client requirements across multiple
            business verticals and domains by housing some of the best
            professionals in the industry.
          </p>
        </div>
        <div className={styles.WhoWeAreImageSection}>
          <img src={WhoWeAreImg} alt="Office Image" />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
