import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import ServicesSection from "./components/Services/ServicesSection";
import ContactPage from "./components/Contact/ContactPage";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="main_container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} /> */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <Footer />
    </>
  );
}

export default App;
