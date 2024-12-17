import React from "react";
import styles from "./WhatWeCanDo.module.css";
import mobileImage from "./cardImages/mob.jpg";
import WebImage from "./cardImages/wd.jpg";
import CommerceImg from "./cardImages/bo.jpg";
import digitalImg from "./cardImages/com.jpg";
import productDesignImg from "./cardImages/dt.jpg";
import cloudImg from "./cardImages/sr.jpg";
import { Link } from "react-router-dom";

const WhatWeCanDo = () => {
  return (
    <div className={styles.WhatWeCanDo}>
      <h1 style={{ textAlign: "center" }}>See What We Can Do for You</h1>
      <ul className={styles.CanDoGrid}>
        <li>
          <div className={styles.CanDoCard}>
            <img
              src={mobileImage}
              className={styles.CanDoCardImg}
              alt="Mobile Design"
            />
            <h3 className={styles.CanDoCardHeading}>Mobile Design</h3>
            <p className={styles.CanDoCardDetails}>
              In today’s fast-paced digital landscape, mobile-optimized websites
              are essential to reaching and engaging users effectively. At
              WebCreationsIT, our mobile design services ensure that your
              website is not only visually appealing but also fully functional
              and user-friendly on all mobile devices.
            </p>
            <Link to="/services" className={styles.CanDoReadMore}>
              Read More
            </Link>
          </div>
        </li>
        <li>
          <div className={styles.CanDoCard}>
            <img
              src={WebImage}
              className={styles.CanDoCardImg}
              alt="Web Development"
            />
            <h3 className={styles.CanDoCardHeading}>Web Development</h3>
            <p className={styles.CanDoCardDetails}>
              At WebCreationsIT, we specialize in creating websites that are
              both visually stunning and technically robust, delivering seamless
              experiences across all devices. Our web development services
              combine creative design with powerful backend functionality,
              ensuring your website is equipped…
            </p>
            <Link to="/services" className={styles.CanDoReadMore}>
              Read More
            </Link>
          </div>
        </li>
        <li>
          <div className={styles.CanDoCard}>
            <img
              src={CommerceImg}
              className={styles.CanDoCardImg}
              alt="eCommerce Service"
            />
            <h3 className={styles.CanDoCardHeading}>eCommerce Service</h3>
            <p className={styles.CanDoCardDetails}>
              In the competitive world of online retail, a powerful,
              user-friendly eCommerce platform can make all the difference. At
              WebCreationsIT, we specialize in creating custom eCommerce
              solutions tailored to your business goals, delivering seamless
              shopping experiences that keep customers coming back.
            </p>
            <Link to="/services" className={styles.CanDoReadMore}>
              Read More
            </Link>
          </div>
        </li>
        <li>
          <div className={styles.CanDoCard}>
            <img
              src={digitalImg}
              className={styles.CanDoCardImg}
              alt="Digital Marketing"
            />
            <h3 className={styles.CanDoCardHeading}>Digital Marketing</h3>
            <p className={styles.CanDoCardDetails}>
              In today’s digital landscape, a strategic online presence is
              essential for connecting with audiences and achieving business
              growth. At WebCreationsIT, we offer a full suite of digital
              marketing services designed to enhance your brand visibility,
              engage your target market, and drive results. Our team combines
              data-driven strategies with creative content to ensure every
              campaign is customized to meet your specific goals and deliver
              measurable success.
            </p>
            <Link to="/services" className={styles.CanDoReadMore}>
              Read More
            </Link>
          </div>
        </li>
        <li>
          <div className={styles.CanDoCard}>
            <img
              src={productDesignImg}
              className={styles.CanDoCardImg}
              alt="Product Design"
            />
            <h3 className={styles.CanDoCardHeading}>Product Design</h3>
            <p className={styles.CanDoCardDetails}>
              At WebCreationsIT, our product design services focus on crafting
              user-centered solutions that are both visually appealing and
              highly functional. We understand that great products start with a
              deep understanding of user needs, market trends, and your unique
              business goals. Our design process combines research, innovation,
              and usability to bring products to life that not only meet but
              exceed user expectations.
            </p>
            <Link to="/services" className={styles.CanDoReadMore}>
              Read More
            </Link>
          </div>
        </li>
        <li>
          <div className={styles.CanDoCard}>
            <img
              src={cloudImg}
              className={styles.CanDoCardImg}
              alt="Cloud Services"
            />
            <h3 className={styles.CanDoCardHeading}>Cloud Services</h3>
            <p className={styles.CanDoCardDetails}>
              In today’s digital landscape, leveraging cloud technology is
              essential for businesses seeking flexibility, scalability, and
              efficiency. At WebCreationsIT, we offer a comprehensive suite of
              cloud services designed to help you harness the power of the cloud
              to enhance operations, reduce costs, and drive innovation. Our
              team of experts works closely with you to tailor cloud solutions
              that meet your specific needs and objectives.
            </p>
            <Link to="/services" className={styles.CanDoReadMore}>
              Read More
            </Link>
          </div>
        </li>
      </ul>
      <div style={{ textAlign: "center" }}>
        <h1>Hire World-Class Developers</h1>
        <button className={styles.HireNowButton}><Link to="/contact">Hire Now <i class="fa fa-arrow-right" aria-hidden="true"></i></Link></button>
      </div>
    </div>
  );
};

export default WhatWeCanDo;
