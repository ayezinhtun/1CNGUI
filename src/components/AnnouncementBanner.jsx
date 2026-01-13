import React, { useState, useEffect } from "react";
import banner from '../assets/banner.png';

export default function AnnouncementBanner({ onBannerHeight }) {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);


  const [endTime] = useState(() => {
      return new Date("2026-02-15T00:00:00").getTime(); 
  });


  // Countdown state
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = endTime - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [endTime]);

  // Scroll hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) setHidden(true);
      else if (currentScrollY < lastScrollY) setHidden(false);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Send banner height to parent
  useEffect(() => {
    const bannerEl = document.getElementById("announcement-banner");
    if (bannerEl && onBannerHeight) onBannerHeight(bannerEl.offsetHeight);
  }, [onBannerHeight]);

  return (
    <div
      id="announcement-banner"
      className={`w-full transform transition-transform py-3 md:py-2 duration-300 ease-in-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{ backgroundColor: "#1F2937", color: "#fff" }}
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 items-center gap-6">
        {/* Left: Logo */}
        <div className="hidden md:flex justify-center">
          <img src={banner} alt="Banner Logo" className="h-32 w-auto" />
        </div>

        <div className="flex flex-col items-center text-center pt-[2px]">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-1">
              {/* Days */}
              <div className="bg-white text-red-500 px-3 py-1 md:px-5 md:py-1 rounded font-bold text-lg md:text-xl flex flex-col items-center">
                {String(timeLeft.days).padStart(2, "0")}
                <span className="text-xs text-black">DAY</span>
              </div>
              {/* Hours */}
              <div className="bg-white text-red-500 px-5 py-1 rounded font-bold text-xl flex flex-col">
                {String(timeLeft.hours).padStart(2, "0")} 
                <span className="text-xs text-black">HR</span>
              </div>
              {/* Minutes */}
              <div className="bg-white text-red-500 px-5 py-1 rounded font-bold text-xl flex flex-col">
                {String(timeLeft.minutes).padStart(2, "0")} <br /> 
                <span className="text-xs text-black">MIN</span>
              </div>
              {/* Seconds */}
              <div className="bg-white text-red-500 px-5 py-1 rounded font-bold text-xl flex flex-col">
                {String(timeLeft.seconds).padStart(2, "0")} <br /> 
                <span className="text-xs text-black">SEC</span>
              </div>
            </div>

            <div className="text-sm md:text-base font-semibold text-white pt-3 w-full md:w-full lg:w-[600px]">
              As part of our soft launch, we’re offering free cloud credits up to 9 lakhs  to early customers who register with us. Slots are limited, secure your access before registration closes on 26 November 2025.
            </div>
          </div>

          
        </div>

        {/* Right: Button with three-line icons */}
        <div className="flex items-center justify-center gap-3">
          {/* Left three-line icon (mirrored) */}
          <div className="flex flex-col justify-center gap-[3px]">
            <div className="w-4 h-[2px] bg-white rotate-[20deg] origin-right"></div>
            <div className="w-4 h-[2px] bg-white"></div>
            <div className="w-4 h-[2px] bg-white rotate-[-20deg] origin-right"></div>
          </div>

          {/* Button */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeQ89PUvgi1hF4-6XO-KzBwdD_h4WFoj54p3HOIc_mh9DfzBA/viewform?usp=sharing&ouid=106599595537133284739"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ffaa04] text-sm md:text-base relative z-10 text-white font-semibold py-3 px-5 md:px-6 rounded-lg hover:bg-[#e69500] transition duration-300 text-center"
          >
            Register Here
          </a>

          {/* Right three-line icon */}
          <div className="flex flex-col justify-center gap-[3px]">
            <div className="w-4 h-[2px] bg-white rotate-[-20deg] origin-left"></div>
            <div className="w-4 h-[2px] bg-white"></div>
            <div className="w-4 h-[2px] bg-white rotate-[20deg] origin-left"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
