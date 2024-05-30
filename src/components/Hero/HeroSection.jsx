import "./HeroSection.css";
import elephantEar from "../../assets/elephantEar.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <img src={elephantEar} alt="Plant" />
      <div className="hero-content">
        <h1>Creating Vibrant Landscapes</h1>
        <h1>Enriching Kaua&apos;i Community</h1>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSf0lEBJ2hOcfeMMqUw2wWNW9P2xCbYaePyrBLiQ6_X5jSFXYQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-contact-link"
        >
          <button className="hero-contact-btn">Contact Us Now!</button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
