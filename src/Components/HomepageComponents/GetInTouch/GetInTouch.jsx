import React from "react";
import styles from "./GetInTouch.module.css";

const GetInTouch = () => {
  return (
    <div className={styles.GetInTouch}>
      <div className={styles.Inquiry}>
        <h4 className={styles.InquiryHeading}>INQUIRY</h4>
        <h2 className={styles.InquirySubheading}>Let's Get in Touch</h2>
      </div>
      <div className={styles.GetInContact}>
        <ul className={styles.PhoneNumbers}>
          <li>
            <div className={styles.ContactOption}>
              <h3 className={styles.ContactHeading}>Hot Line</h3>
              <div className={styles.ContactBox}>
                <p>
                  <i class="fa fa-phone" aria-hidden="true"></i>{" "}
                  <a href="tel:8847065492">8847065492</a>
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.ContactOption}>
              <h3 className={styles.ContactHeading}>HR Department</h3>
              <div className={styles.ContactBox}>
                <p>
                  <i class="fa fa-phone" aria-hidden="true"></i>{" "}
                  <a href="tel:9530752606">9530752606</a>
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.ContactOption}>
              <h3 className={styles.ContactHeading}>Email</h3>
              <div className={styles.ContactBox}>
                <p>
                  <i class="fa fa-phone" aria-hidden="true"></i>{" "}
                  <a href="mailto:info.webcreationsit@gmail.com">
                    info.webcreationsit@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </li>
        </ul>
        <div className={styles.ContactForm}>
          <h2 className={styles.formHeading}>Please fill in the form below</h2>
          <form>
            <div className={styles.FormRow}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className={styles.FormInput}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className={styles.FormInput}
              />
            </div>
            <div className={styles.FormRow}>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className={styles.FormInput}
              />
              <input
                type="text"
                name="skype"
                placeholder="Skype"
                className={styles.FormInput}
              />
            </div>
            <div className={styles.FormRow}>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className={styles.FormInput}
              />
              <select name="interest" className={styles.FormInput}>
                <option
                  value=""
                  disabled
                  selected
                  className={styles.DefaultSelection}
                >
                  Interested In
                </option>
                <option value="Web Design">Web Design</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="App Development">App Development</option>
                <option value="E-Commerce Development">
                  E-Commerce Development
                </option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Business Growth">Business Growth</option>
                <option value="Business Startup">Business Startup</option>
                <option value="Other">Other...</option>
              </select>
            </div>
            <div className={styles.FormRow}>
              <textarea
                name="message"
                placeholder="Message"
                className={styles.FormTextarea}
              ></textarea>
            </div>
            <div className={styles.FormRowCheckbox}>
              <input
                type="checkbox"
                name="terms"
                id="terms"
                className={styles.FormCheckbox}
              />
              <label htmlFor="terms">
                I agree to the Terms & Conditions of Web Creations IT.
              </label>
            </div>
            <div className={styles.ContactFormButtonDiv}>
              <button type="submit" className={styles.ContactFormButton}>
                Send your inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
