import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/TransparentLogoWhite.png";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav-links-container">
        <ul className="nav-links">
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className={location.pathname === "/portfolio" ? "active" : ""}
            >
              Portfolio
            </Link>
          </li>
        </ul>
        <Link to="/contact">
          <button className="contact-btn">Contact</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
