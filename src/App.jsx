import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import ServicesSection from "./components/Services/ServicesSection";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="main_container">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}

export default App;
