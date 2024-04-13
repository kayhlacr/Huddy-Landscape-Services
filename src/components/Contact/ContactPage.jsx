import React from "react";
import "./ContactPage.css";
import phoneIcon from "../../assets/phoneIcon.png";
import instagramIcon from "../../assets/instagramIcon.png";
import emailIcon from "../../assets/emailIcon.png";
import formIcon from "../../assets/formIcon.png";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div className="contact-column">
          <div className="contact-item">
            <img src={phoneIcon} alt="Phone" />
            <a href="tel:808-515-3332">808-515-3332</a>
          </div>
          <div className="contact-item">
            <img src={emailIcon} alt="Email" />
            <a href="mailto:huddylandscapeservice@gmail.com">
              huddylandscapeservice@gmail.com
            </a>
          </div>
        </div>
        <div className="contact-column">
          <div className="contact-item">
            <img src={formIcon} alt="Form" />
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf0lEBJ2hOcfeMMqUw2wWNW9P2xCbYaePyrBLiQ6_X5jSFXYQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Need landscaping work done? Fill out our form
            </a>
          </div>
          <div className="contact-item">
            <img src={instagramIcon} alt="Instagram" />
            <a
              href="https://www.instagram.com/huddylandscapeserviceinc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow Us on Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
