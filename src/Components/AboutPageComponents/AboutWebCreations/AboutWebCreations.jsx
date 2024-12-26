import React, { useEffect, useState } from "react";
import styles from "./AboutWebCreations.module.css";

const AboutWebCreations = () => {
  const [CompletedProjects, setCompletedProjects] = useState(0);
  const [HappyClients, setHappyClients] = useState(0);
  const [ExpertTeam, setExpertTeam] = useState(0);
  const [SuccessYears, setSuccessYears] = useState(0);

  useEffect(() => {
    const incrementCounter = (setter, maxCount, increment, interval) => {
      let currentCount = 0;

      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= maxCount) {
          currentCount = maxCount;
          clearInterval(timer);
        }
        setter(currentCount);
      }, interval);

      return () => clearInterval(timer);
    };

    const cleanupCompletedProjects = incrementCounter(
      setCompletedProjects,
      350,
      2,
      10
    );
    const cleanupHappyClients = incrementCounter(setHappyClients, 800, 4, 9);
    const cleanupExpertTeam = incrementCounter(setExpertTeam, 15, 1, 120);
    const cleanupSuccessYears = incrementCounter(setSuccessYears, 8, 1, 210);

    return () => {
      cleanupCompletedProjects();
      cleanupHappyClients();
      cleanupExpertTeam();
      cleanupSuccessYears();
    };
  }, []);

  return (
    <div className={styles.AboutWebCreations}>
      <div className={styles.AboutWebCreationsContent}>
        <div className={styles.AboutWebCreationsHeadingSection}>
          <div className={styles.AboutWebCreationsHeading}>
            ABOUT WEB CREATIONS IT
          </div>
          <div className={styles.AboutWebCreationsSubHeading}>
            Web Creations IT
          </div>
        </div>
        <div className={styles.AboutWebCreationsDetailsSection}>
          <div className={styles.AboutWebCreationsDetailsSectionContent}>
            <h3 className={styles.AboutWebCreationsDetailsHeading}>
              Web creations is a full-service web, app and digital marketing
              company based in India.
            </h3>
            <p className={styles.AboutWebCreationsDetails}>
              Our experts provide a wide range of services including app design,
              web development, digital marketing, ecommerce solutions and cloud
              development. We stay updated with the technology to build
              innovative digital products that meet client requirements across
              multiple business verticals and domains by housing some of the
              best professionals in the industry. To transform the concepts to
              design, concluding with full executions, we also stay updated with
              the latest trending technologies. And we evolve with the
              advancement in technology because we believe in making our
              technology as your innovation.
            </p>
            <p className={styles.AboutWebCreationsDetailsSection}>
              To learn more about our approach to business and work, feel free
              to hop on over to our Open Contact Page.
            </p>
          </div>

          <div className={styles.AboutWebCreationsDetailsSectionCardGrid}>
            <div className={styles.AboutWebCreationsDetailsSectionCard}>
              <h2 className={styles.AboutWebCreationsDetailsSectionCardHeading}>
                {CompletedProjects}
                {CompletedProjects === 350 ? "+" : ""}
              </h2>
              <h3
                className={styles.AboutWebCreationsDetailsSectionCardSubHeading}
              >
                Completed Projects
              </h3>
            </div>
            <div className={styles.AboutWebCreationsDetailsSectionCard}>
              <h2 className={styles.AboutWebCreationsDetailsSectionCardHeading}>
                {HappyClients}
                {HappyClients === 800 ? "+" : ""}
              </h2>
              <h3
                className={styles.AboutWebCreationsDetailsSectionCardSubHeading}
              >
                Happy Clients
              </h3>
            </div>
            <div className={styles.AboutWebCreationsDetailsSectionCard}>
              <h2 className={styles.AboutWebCreationsDetailsSectionCardHeading}>
                {ExpertTeam}
                {ExpertTeam === 15 ? "+" : ""}
              </h2>
              <h3
                className={styles.AboutWebCreationsDetailsSectionCardSubHeading}
              >
                Expert Team
              </h3>
            </div>
            <div className={styles.AboutWebCreationsDetailsSectionCard}>
              <h2 className={styles.AboutWebCreationsDetailsSectionCardHeading}>
                {SuccessYears}
                {SuccessYears === 8 ? "+" : ""}
              </h2>
              <h3
                className={styles.AboutWebCreationsDetailsSectionCardSubHeading}
              >
                Success Years
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWebCreations;
