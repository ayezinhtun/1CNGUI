import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // detects route changes

  useEffect(() => {
    window.scrollTo({
      top: 0,         // scrolls to the very top
      behavior: "auto" // instant, not smooth
    });
  }, [pathname]); // runs every time the route changes

  return null;
};

export default ScrollToTop;
