import React, { useState, useEffect } from "react";
import banner from '../assets/banner.png';

export default function AnnouncementBanner({ onBannerHeight }) {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // const [endTime] = useState(() => {
  //   const saved = localStorage.getItem("bannerEndTime");
  //   if (saved && !isNaN(Number(saved))) return Number(saved);
  //   const now = new Date().getTime();
  //   const newEnd = now + 10 * 24 * 60 * 60 * 1000; // 10 days in ms
  //   localStorage.setItem("bannerEndTime", newEnd.toString());
  //   return newEnd;
  // });

    //   const [endTime] = useState(() => {
    //   const savedStart = localStorage.getItem("bannerStartTime");
    //   let start;
    //   if (savedStart && !isNaN(Number(savedStart))) {
    //     start = Number(savedStart);
    //   } else {
    //     start = new Date().getTime();
    //     localStorage.setItem("bannerStartTime", start.toString());
    //   }
    //   return start + 1 * 24 * 60 * 60 * 1000; 
    //   }

    // );

  const [endTime] = useState(() => {
      return new Date("2025-10-28T10:00:00").getTime(); 
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
      className={`w-full transform transition-transform duration-300 py-2 ease-in-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{ backgroundColor: "#1F2937", color: "#fff" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <img src={banner} alt="Banner Logo" className="h-20 w-auto rounded" />
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-1">
              {/* Days */}
              <div className="bg-white text-red-500 px-5 py-1 rounded font-bold text-xl flex flex-col">
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

            <div className="text-sm md:text-base font-medium text-white pt-3">
              One Cloud Next-Gen Launching Soon — Get Ready to Deploy Powerful Cloud Instances!
            </div>
          </div>

          
        </div>

        {/* Right: Button with three-line icons */}
        <div className="flex items-center gap-2">
          {/* Left three-line icon (mirrored) */}
          <div className="flex flex-col justify-center gap-[3px]">
            <div className="w-4 h-[2px] bg-white rotate-[20deg] origin-right"></div>
            <div className="w-4 h-[2px] bg-white"></div>
            <div className="w-4 h-[2px] bg-white rotate-[-20deg] origin-right"></div>
          </div>

          {/* Button */}
          <a
            href="#"
            className="bg-[#ffaa04] text-sm md:text-base relative z-10 text-white font-semibold py-3 px-5 md:px-6 rounded-lg hover:bg-[#e69500] transition duration-300 text-center"
          >
            Start Here
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
