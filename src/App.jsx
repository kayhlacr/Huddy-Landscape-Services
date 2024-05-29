import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import ServicesSection from "./components/Services/ServicesSection";
import ContactPage from "./components/Contact/ContactPage";
import AboutPage from "./components/About/AboutPage";
import PortfolioPage from "./components/Portfolio/PortfolioPage";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "normalize.css";
import "./App.css";
import UpArrow from "./assets/UpArrow.png";
import useScrollPosition from "./hooks/useScrollPosition";

function App() {
  const { scrollPosition, isScrolling } = useScrollPosition();
  const atBottom =
    window.innerHeight + window.scrollY >= document.body.offsetHeight;
  const [yOffset, setyOffset] = useState(0);

  return (
    <div className="main_container">
      <Router>
        <ScrollToTop yOffset={yOffset} setyOffset={setyOffset}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          {scrollPosition > 100 && (isScrolling || atBottom) && (
            <button
              id="scrollToTopBtn"
              className="scroll-to-top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img src={UpArrow} alt="Scroll to Top" />
            </button>
          )}
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
    </>
  );
}

export default App;
