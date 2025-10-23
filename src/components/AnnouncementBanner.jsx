import React, { useState, useEffect } from "react";

export default function AnnouncementBanner({ onBannerHeight }) {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Track scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setHidden(true); // scrolling down → hide banner
      } else if (currentScrollY < lastScrollY) {
        setHidden(false); // scrolling up → show banner
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Send banner height to parent for navbar offset
  useEffect(() => {
    const bannerEl = document.getElementById("announcement-banner");
    if (bannerEl && onBannerHeight) {
      onBannerHeight(bannerEl.offsetHeight);
    }
  }, [onBannerHeight]);

  return (
    <div
      id="announcement-banner"
      className={`bg-pink-100 text-gray-900 w-full transform transition-transform duration-300 ease-in-out`}
      style={{ transform: hidden ? "translateY(-100%)" : "translateY(0)" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4 relative">
        {/* Left image */}
        <img
          src="/path-to-your-image.jpg"
          alt="Promo"
          className="w-16 h-16 object-cover rounded-full"
        />

        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-lg md:text-xl font-semibold">
            Like my new site? Check out our templates!
          </h2>
          <p className="text-sm md:text-base mt-1">
            Super dynamic, gorgeous templates you will love!
          </p>
        </div>

        {/* Button */}
        <a
          href="#"
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 text-sm md:text-base"
        >
          SAVE 15% WITH CODE
        </a>

        {/* Close button */}
        <button
          onClick={() => setHidden(true)}
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
