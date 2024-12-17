import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import styles from "./Testimonials.module.css";
import logo from "./CarouselImg/image.png";

const Testimonials = () => {
  return (
    <div className={styles.Testimonials}>
      <div className={styles.TestimonialHeadings}>
        <h3 className={styles.TestimonialHeading}>TESTIMONIALS</h3>
        <h1 className={styles.TestimonialSubHeading}>
          Our Clients Praise{" "}
          <span style={{ color: "#ff5b2e" }}>Us For Our</span> Great Results
        </h1>
      </div>
      <div className={styles.carousel}>
        <Swiper
          modules={[Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true, el: '.custom-pagination' }}
          autoplay={{ delay: 3000 }}
          slidesPerView={1}
          loop={true}
        >
          <div className="custom-pagination"></div>
          <div className={styles.SwiperSlides}>
            <SwiperSlide>
              <img src={logo} alt="Logo" />
              <p className={styles.review}>
                Great communication, honest, clear, concise and knowledgeable.
                The response to my query was swift and timely. Hired them for
                website building. Did great work. Must consider them for
                professional, reliable and affordable work
              </p>
              <h4 className={styles.ClientName}>Varinder Sohi</h4>
              <div className={styles.rating}>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={logo} alt="Logo" />
              <p className={styles.review}>
                Absolutely fantastic solution providers. Just 1 call away and
                delivery on time . Must try them once.
              </p>
              <h4 className={styles.ClientName}>Mani kang</h4>
              <div className={styles.rating}>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={logo} alt="Logo" />
              <p className={styles.review}>
                They are the best in the industry. I can’t be more happy with
                the customer service they provided. Used their services to build
                a website and it was beautifully done as per my requirements. It
                was done in such a quick time and at a very reasonable price.
                Susheel took care of everything from beginning to end. I would
                highly recommend them.
              </p>
              <h4 className={styles.ClientName}>Aman</h4>
              <div className={styles.rating}>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={logo} alt="Logo" />
              <p className={styles.review}>
                We have been working with Web Creation IT for maintaining our
                website. They are always available to quickly reply and act on
                our requests. Web Creations IT has all the required expertise to
                provide the best service for value for money. The staff is very
                supportive, friendly and responsible in handling sensitive
                webdata. I recommend their services if you are looking for
                designing and developing a professional website, or maintaining
                them.
              </p>
              <h4 className={styles.ClientName}>Gurwinder Dhaliwal</h4>
              <div className={styles.rating}>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={logo} alt="Logo" />
              <p className={styles.review}>
                Worked with this company, Excellent job!!!, quick service
                provider.
                <br />
                Very communicative to solve problems.
                <br />
                Positive
                <br />
                Responsiveness, Quality, Professionalism, Value
              </p>
              <h4 className={styles.ClientName}>Mustafa Diwanji</h4>
              <div className={styles.rating}>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
