import React from "react";
import styles from "./CompaniesWeWorkWith.module.css";
import companyimage from "./CompanyImages/east-logo.png";
import companyimage2 from "./CompanyImages/3-Mountain-Logo.jpg";
import companyimage3 from "./CompanyImages/Akashic-Bathing-logo.png";
import companyimage4 from "./CompanyImages/CAF.png";
import companyimage5 from "./CompanyImages/HygiaLogo.png";
import companyimage6 from "./CompanyImages/KM-dakdekking.jpg";
import companyimage7 from "./CompanyImages/Logo-social-1.jpg";
import companyimage8 from "./CompanyImages/Mcc-roofing.png";
import companyimage9 from "./CompanyImages/RelayRobotics.jpg";
import companyimage10 from "./CompanyImages/cloudcapital.png";
import companyimage11 from "./CompanyImages/crawford.jpg";
import companyimage12 from "./CompanyImages/farming-logo.png";
import companyimage13 from "./CompanyImages/joshyorkggpng-1.jpg";
import companyimage14 from "./CompanyImages/living-vibrance.png";
import companyimage15 from "./CompanyImages/logo-USBC.png";
import companyimage16 from "./CompanyImages/logo-gigi.png";
import companyimage17 from "./CompanyImages/logo-john.jpg";
import companyimage18 from "./CompanyImages/logo-lavish.jpg";
import companyimage19 from "./CompanyImages/mabel_logo.png";
import companyimage20 from "./CompanyImages/malcolm-logo.jpg";
import companyimage21 from "./CompanyImages/ruby-logo.jpg";
import companyimage22 from "./CompanyImages/sweeten-logo.jpg";
import companyimage23 from "./CompanyImages/thomas-logo.png";
import companyimage24 from "./CompanyImages/trident-logo.png";
import { Link } from "react-router-dom";

const CompaniesWeWorkWith = () => {
  return (
    <div className={styles.CompaniesWeWorkWith}>
      <div className={styles.CompanyDetails}>
        <h1>
          We Work With <span style={{ color: "#FF5639" }}>Great Companies</span>{" "}
          of All Sizes
        </h1>
        <h4>
          Web creations started its operation in the year 2019. We are
          Worldwide, based Web, App and Digital Marketing Company. Our main
          Domain is Web Design, App Development, Digital Marketing, Product
          Design and Cloud Services. Customer Satisfaction and the Highest rate
          of Customer Repeatability make us one of the pioneers in the field.
          So, what are you waiting for? Let us discuss your ideas and our
          innovation in detail because catering your requirement and converting
          it into a final product is our main goal.
        </h4>
      </div>
      <div>
        <ul className={styles.CompanyGrid}>
          <li>
            <img src={companyimage} alt="" />
          </li>
          <li>
            <img src={companyimage2} alt="" />
          </li>
          <li>
            <img src={companyimage3} alt="" />
          </li>
          <li>
            <img src={companyimage4} alt="" />
          </li>
          <li>
            <img src={companyimage5} alt="" />
          </li>
          <li>
            <img src={companyimage6} alt="" />
          </li>
          <li>
            <img src={companyimage7} alt="" />
          </li>
          <li>
            <img src={companyimage8} alt="" />
          </li>
          <li>
            <img src={companyimage9} alt="" />
          </li>
          <li>
            <img src={companyimage10} alt="" />
          </li>
          <li>
            <img src={companyimage11} alt="" />
          </li>
          <li>
            <img src={companyimage12} alt="" />
          </li>
          <li>
            <img src={companyimage13} alt="" />
          </li>
          <li>
            <img src={companyimage14} alt="" />
          </li>
          <li>
            <img src={companyimage15} alt="" />
          </li>
          <li>
            <img src={companyimage16} alt="" />
          </li>
          <li>
            <img src={companyimage17} alt="" />
          </li>
          <li>
            <img src={companyimage18} alt="" />
          </li>
          <li>
            <img src={companyimage19} alt="" />
          </li>
          <li>
            <img src={companyimage20} alt="" />
          </li>
          <li>
            <img src={companyimage21} alt="" />
          </li>
          <li>
            <img src={companyimage22} alt="" />
          </li>
          <li>
            <img src={companyimage23} alt="" />
          </li>
          <li>
            <img src={companyimage24} alt="" />
          </li>
        </ul>
      </div>
      <div>
        <button className={styles.viewClients}>
          <Link to="/our-clients">
            View All our clients{" "}
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CompaniesWeWorkWith;
