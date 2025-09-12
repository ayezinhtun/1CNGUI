import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

const HeroSession = () => {
  // Text to be animated
  const text = "Powerful Scalable Local";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Typing and deleting speeds
    const typingSpeed = 200; // Speed of typing (in milliseconds)
    const deletingSpeed = 100; // Speed of deleting (in milliseconds)
    const pauseBeforeDelete = 1000; // Pause before deleting starts (in milliseconds)
    const pauseBeforeRestart = 500; // Pause before restarting (in milliseconds)

    const timeout = setTimeout(
      () => {
        if (!isDeleting && index < text.length) {
          // Typing phase
          setDisplayText((prev) => prev + text[index]);
          setIndex((prev) => prev + 1);
        } else if (isDeleting && index > 0) {
          // Deleting phase
          setDisplayText((prev) => prev.slice(0, -1));
          setIndex((prev) => prev - 1);
        }

        // Switch to deleting phase after typing is complete
        if (index === text.length && !isDeleting) {
          setIsDeleting(true);
          setTimeout(() => {}, pauseBeforeDelete); // Pause before deleting
        } else if (isDeleting && index === 0) {
          // Restart typing after deleting is complete
          setIsDeleting(false);
          setTimeout(() => {}, pauseBeforeRestart); // Pause before restarting
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    // Cleanup timeout on component unmount
    return () => clearTimeout(timeout);
  }, [index, isDeleting, text]);

  return (
    <div className="flex items-center justify-center lg:h-screen hero-bg pb-16 lg:pb-0 pt-0 md:pt-10 px-4 sm:px-6 lg:px-8">
      {/* Background clouds */}
      <div className="clouds"></div>

      <div className="text-center pt-32 lg:pt-0">
        {/* Main Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-primary mb-4 relative z-10"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          One Cloud Next-Gen
        </motion.h1>

        {/* Animated Subheading */}
        <span className="text-3xl md:text-5xl z-10 relative mb-8 font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-motion">
          {displayText || "\u00A0"}{" "}
          {/* Use non-breaking space to maintain height */}
        </span>

        {/* Subheading Description */}
        <motion.div
          className="text-lg md:text-xl text-secondary mt-8 mb-8 relative z-10"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2, delay: 1 * 0.2 }}
        >
          <span>Deploy powerful cloud instances with ultra-fast NVMe SSD storage and flexible pay-as-you-go pricing.</span>
          <br />
          Powered by One Cloud Next-Gen — with 99.95% uptime.
        </motion.div>

        {/* Call-to-Action Buttons */}
        <div className="space-x-0 md:space-x-4 flex justify-center gap-4">
          {/* Start Free Trial Button */}
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 * 0.2 }}
            href="#"
            className="bg-[#ffaa04] text-sm md:text-base relative z-10 text-white font-semibold py-3 px-5 md:px-6 rounded-lg hover:bg-[#e69500] transition duration-300 text-center"
          >
            Start Free Trial
          </motion.a>

          {/* View Pricing Button */}
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 * 0.2 }}
            href="/pricing"
            className="text-primary text-sm md:text-base relative z-10 font-semibold py-3 px-5 md:px-6 rounded-lg border border-primary hover:text-[#3333CC] hover:border-[#3333CC] transition duration-300 text-center"
            whileHover={{
              boxShadow: "4px 4px 0px 0px #3333CC", // Adds a 3D shadow effect
              transform: "translate(-4px, -4px)", // Moves the button to align with the shadow
              transition: { duration: 0.2 },
            }}
          >
            Pricing
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default HeroSession;
