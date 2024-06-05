import { useState, useEffect } from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const marginTop = 60;

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      setScrollPosition(window.scrollY - marginTop);
      setIsScrolling(true);

      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 10000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [marginTop]);

  return { scrollPosition, isScrolling };
};

export default useScrollPosition;
