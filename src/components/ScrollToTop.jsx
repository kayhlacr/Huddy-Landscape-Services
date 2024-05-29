import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ yOffset = 0, setyOffset, children }) => {
  const copyYOffset = yOffset;
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: copyYOffset, left: 0, behavior: "instant" });
    setyOffset(0);
  }, [location, copyYOffset, setyOffset]);

  return <>{children}</>;
};

export default ScrollToTop;
