import './Footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <img src={logo} alt="Logo" className="logo" />
          <p className="company-name">Huddy Landscape Services, LLC</p>
          <div className="contact-info">
            {/* <img src={emailIcon} alt="Email" className="icon" />
            <img src={instagramIcon} alt="Instagram" className="icon" /> */}
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;