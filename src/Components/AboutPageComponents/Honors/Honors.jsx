import React from "react";
import styles from "./Honors.module.css";
import PlatinumImg from "./HonorImages/PlatinumWinner.png";
import GoodDesignImg from "./HonorImages/GreatDesign.png";
import BestBrandImg from "./HonorImages/BestBrand.png";
import GoodDeveloperImg from "./HonorImages/GoodDeveloper.png";

const Honors = () => {
  return (
    <div className={styles.Honors}>
      <div className={styles.HonorsContent}>
        <div className={styles.HonorsHeadingSection}>
          <h4 className={styles.HonorsHeading}>HONORS</h4>
          <h2 className={styles.HonorsSubHeading}>Awards & Achievements</h2>
        </div>
        <div className={styles.AwardsCardGrid}>
          <div className={styles.AwardsCard}>
            <img
              src={PlatinumImg}
              alt="Platinum Winner Design"
              className={styles.AwardsCardImg}
            />
            <h2 className={styles.AwardCardHeading}>
              Platinum Winner design Award
            </h2>
          </div>
          <div className={styles.AwardsCard}>
            <img
              src={GoodDesignImg}
              alt="Great Design Award"
              className={styles.AwardsCardImg}
            />
            <h2 className={styles.AwardCardHeading}>Great design Award 2021</h2>
          </div>
          <div className={styles.AwardsCard}>
            <img
              src={BestBrandImg}
              alt="Best brand award"
              className={styles.AwardsCardImg}
            />
            <h2 className={styles.AwardCardHeading}>Best Brand Award 2021</h2>
          </div>
          <div className={styles.AwardsCard}>
            <img
              src={GoodDeveloperImg}
              alt="Good app Developer"
              className={styles.AwardsCardImg}
            />
            <h2 className={styles.AwardCardHeading}>
              Good App Developer 2020-21
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Honors;
