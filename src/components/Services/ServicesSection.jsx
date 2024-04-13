import "./ServicesSection.css";
import irrigationSystem1 from "../../assets/IrrigationSystem1.jpeg";
import landscapeConstruction6 from "../../assets/LandscapeConstruction6.jpg";
import maintenance3 from "../../assets/Maintenance3.jpg";
import LandscapeConstruction from "../../assets/LandscapeContruction.png";

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="container">
        <div className="service-container">
          <h1>Services</h1>
          <p>
            Welcome to Huddy Landscape Service, Inc., a testament to the lush
            beauty of Kauai, nurtured and curated by the hands of a family
            deeply rooted in love for the land and our community. Founded by
            Kainoa and Mele Huddy, our company is a Hawaiian-owned, woman-led
            beacon of excellence in landscaping and commercial maintenance. Our
            journey in this industry is not just about enhancing spaces but
            about cultivating connections—with nature, with our heritage, and
            with the people we serve.
          </p>
        </div>
        <div className="service">
          <div className="number-container">
            <h2>O1</h2>
            <h3>Landscape Construction</h3>
          </div>
          <p>
            Enhance your outdoor spaces with our expert landscape construction
            services. From garden design to hardscaping, we create functional
            and visually stunning environments that elevate your propertys
            appeal.
          </p>
          <img
            src={landscapeConstruction6}
            alt="Landscape Construction"
            className="off-set-img"
          />
        </div>

        <div className="service irrigation-systems-service">
          <div className="number-container">
            <h2>O2</h2>
            <h3>Irrigation Systems</h3>
          </div>
          <p>
            Optimize water usage and maintain lush landscapes with our
            cutting-edge irrigation systems. Our tailored solutions ensure
            efficient watering for gardens, lawns, and green spaces, promoting
            healthy growth while conserving resources.
          </p>
          <img src={irrigationSystem1} alt="Irrigation Systems" />
        </div>

        <div className="service">
          <div className="number-container">
            <h2>O3</h2>
            <h3>Residential & Commercial Maintenance</h3>
          </div>
          <p>
            Keep your residential and commercial properties looking their best
            with our comprehensive maintenance services. From lawn care to
            property upkeep, we offer professional solutions tailored to your
            needs, ensuring your outdoor spaces always make a lasting
            impression.
          </p>
          <img
            src={maintenance3}
            alt="Residential & Commercial Maintenance"
            className="off-set-img"
          />
        </div>
      </div>
      <div className=" landscape-construction-service">
        <img src={LandscapeConstruction} alt="Landscape Construction" />
      </div>
    </section>
  );
};

export default ServicesSection;
