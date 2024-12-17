import React from "react";
import styles from "./Blog.module.css";
import BlogImage1 from "./Blog images/website-designing-in-barnala-WebcreationsIT.jpg";
import BlogImage2 from "./Blog images/imgpsh_fullsize_anim.jpg";
import BlogImage3 from "./Blog images/Website-Design-In-Patiala.jpg";

const Blog = () => {
  return (
    <div className={styles.Blog}>
      <h4 className={styles.BlogHeading}>LATEST FROM BLOG</h4>
      <h1 className={styles.BlogSubheading}>
        Read Stories, Tips And Our Opinions On Everything
      </h1>
      <div>
        <ul className={styles.BlogGrid}>
          <li>
            <div className={styles.BlogCard}>
              <img src={BlogImage1} alt="Website Designing Company" />
              <div className={styles.BlogCardText}>
                <h2 className={styles.blogTitle}>
                  Professional Website Design Services in Barnala – Web
                  Creations IT
                </h2>
                <p className={styles.PublishDate}>Dec 2, 2024</p>
                <p className={styles.BlogContent}>
                  In today’s digital era, a well-designed website is your
                  gateway to success. At Web Creations IT, Barnala’s premier
                  website design agency, we specialize in crafting visually
                  stunning and highly functional websites tailored to meet your
                  business goals.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.BlogCard}>
              <img src={BlogImage2} alt="Need a Website" />
              <div className={styles.BlogCardText}>
                <h2 className={styles.blogTitle}>
                  Mastering the Digital World: Website Training in Barnala
                </h2>
                <p className={styles.PublishDate}>Aug 26, 2024</p>
                <p className={styles.BlogContent}>
                  In today’s digital age, having a robust online presence is
                  crucial for individuals and businesses alike. Whether you’re
                  looking to build
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.BlogCard}>
              <img src={BlogImage3} alt="Website Development in Patiala" />
              <div className={styles.BlogCardText}>
                <h2 className={styles.blogTitle}>Website Design in Patiala</h2>
                <p className={styles.PublishDate}>Dec 2, 2024</p>
                <p className={styles.BlogContent}>
                  If you are looking for an affordable Website Designing Company
                  in Patiala, then you have come to the right place. Web
                  Creation It is a professional Web
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;
