import "./Footer.css";
import instagramIcon from "../../assets/instagramIcon.png";
import emailIcon from "../../assets/emailIcon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="company-name">Huddy Landscape Services, LLC</p>
        <div className="footer-contact">
          <a
            href="mailto:huddylandscapeservice@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={emailIcon} alt="Email" className="icon" />
          </a>

          <a
            href="https://www.instagram.com/huddylandscapeserviceinc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
