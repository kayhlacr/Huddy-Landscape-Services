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
            <div className="contact-content">
              <a href="tel:808-515-3332">
                <img src={phoneIcon} alt="Phone" />
              </a>
              <a href="tel:808-515-3332">808-515-3332</a>
            </div>
          </div>
          <div className="contact-item" id="weird-margin">
            <div className="contact-content">
              <a href="mailto:huddylandscapeservice@gmail.com">
                <img src={emailIcon} alt="Email" />
              </a>
              <a href="mailto:huddylandscapeservice@gmail.com">
                huddylandscapeservice@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="contact-column">
          <div className="contact-item">
            <div className="contact-content">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf0lEBJ2hOcfeMMqUw2wWNW9P2xCbYaePyrBLiQ6_X5jSFXYQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={formIcon} alt="Form" />
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf0lEBJ2hOcfeMMqUw2wWNW9P2xCbYaePyrBLiQ6_X5jSFXYQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Need landscaping work done? Fill out our form
              </a>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-content">
              <a
                href="https://www.instagram.com/huddylandscapeserviceinc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramIcon} alt="Instagram" />
              </a>
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
    </div>
  );
};

export default ContactPage;
