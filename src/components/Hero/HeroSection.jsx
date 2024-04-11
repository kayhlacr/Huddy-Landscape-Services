import './HeroSection.css';
import elephantEar from '../../assets/elephantEar.jpg'; 

const HeroSection = () => {
  return (
    <section className="hero-section">
      <img src={elephantEar} alt="Plant" /> 
      <div className="hero-content">
        <h1>Creating Vibrant Landscapes</h1>
        <h1>Enriching Kauai Community</h1>
      </div>
    </section>
  );
}

export default HeroSection;
