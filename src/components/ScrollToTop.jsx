import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: -60, left: 0, behavior: "instant" });
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTop;
