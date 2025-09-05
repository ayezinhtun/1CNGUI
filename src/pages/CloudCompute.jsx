import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CloudCompute() {
  const [isPayAsYouGoOpen, setIsPayAsYouGoOpen] = useState(false);
  const [isReservedInstancesOpen, setIsReservedInstancesOpen] = useState(false);

  const text = "Powerful Scalable Local";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
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
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <div
        className="relative h-64 text-center flex flex-col justify-center items-center py-10 md:py-14"
        style={{
          backgroundColor: "#283E80", // Custom background color
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Ccircle cx='100' cy='100' r='80' fill='%23ffffff' fill-opacity='0.1'/%3E%3Ccircle cx='300' cy='200' r='120' fill='%23ffffff' fill-opacity='0.1'/%3E%3Ccircle cx='500' cy='50' r='60' fill='%23ffffff' fill-opacity='0.1'/%3E%3Ccircle cx='700' cy='300' r='100' fill='%23ffffff' fill-opacity='0.1'/%3E%3Ccircle cx='200' cy='350' r='90' fill='%23ffffff' fill-opacity='0.1'/%3E%3Ccircle cx='600' cy='150' r='70' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: "cover", // Cover the entire banner
          backgroundPosition: "center", // Center the pattern
          backgroundRepeat: "no-repeat", // Prevent repetition
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <motion.h1
          className="text-2xl md:text-5xl font-bold text-white relative z-10 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          One Cloud Next-Gen
        </motion.h1>
        <span className="mx-8 mt-4 text-3xl md:text-4xl z-10 relative font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-motion">
          {displayText || "\u00A0"}{" "}
          {/* Use non-breaking space to maintain height */}
        </span>
      </div>

      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        {/* Free Trial Banner */}
        <a
          href="#"
          className="mt-5 p-4 w-fit text-xs sm:text-base text-primary font-semibold bg-white rounded-lg shadow-md transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-700"
        >
          Start Free Trial with 1CNG Instances
        </a>

        {/* Description */}
        <div className="mt-12">
          <h2 className="text-primary text-2xl font-bold">Cloud Compute</h2>
          <p className="mt-2">
            Scalable and secure computing for any workload.
          </p>
        </div>

        {/* Why 1CNG Instances? */}
        <div className="mt-10 block md:flex items-start justify-between">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why 1CNG Instances?
          </h2>
          <p className="max-w-lg mt-5 md:mt-0">
            High Performance – Optimized with high-frequency vCPUs, NVMe SSDs,
            and low-latency networking for blazing-fast speed.Pay-As-You-Go –
            Per-second billing with no long-term commitments—scale as needed,
            pay only for what you use.Reliable & Secure – 99.9% uptime,
            automated backups, and enterprise-grade security to keep your
            workloads running smoothly.{" "}
            <a href="/pricing" className="text-blue-700 underline">
              View our packages and pricing.
            </a>
          </p>
        </div>

        {/* Pricing Models */}
        <div className="mt-10 md:mt-20 block md:flex items-center justify-between">
          {/* Left Side: Pricing Models Text */}
          <h2 className="text-xl md:text-2xl font-bold">Pricing Models</h2>

          {/* Right Side: Collapsible Buttons */}
          <div className="space-y-4 mt-5 md:mt-0">
            {/* Pay as you go Button */}
            <div className="rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => setIsPayAsYouGoOpen(!isPayAsYouGoOpen)}
                className="w-full flex justify-between items-center px-4 py-3 text-primary font-semibold bg-white rounded-t-lg shadow-md transition-shadow duration-300"
              >
                <span>Pay as you go</span>
                <span
                  className={`transform transition-transform duration-300 ${
                    isPayAsYouGoOpen ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`transition-all bg-secondary duration-300 ease-in-out overflow-hidden ${
                  isPayAsYouGoOpen
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-4 text-white max-w-lg">
                  <p>
                    At 1CNG, we offer a Pay-As-You-Go model with hourly billing
                    on a prepaid basis, ensuring you only pay for what you use.
                    This flexible approach allows you to scale resources as
                    needed without long-term commitments, making it ideal for
                    dynamic workloads. All charges are in MMK (local currency)
                    for better cost control and convenience.{" "}
                    <a href="/pricing" className="text-accent underline">
                      [view pricing]
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Reserved Instances Button */}
            <div className=" rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() =>
                  setIsReservedInstancesOpen(!isReservedInstancesOpen)
                }
                className="w-full flex justify-between items-center px-4 py-3 text-primary font-semibold bg-white rounded-t-lg shadow-md transition-shadow duration-300"
              >
                <span>Reserved Instances</span>
                <span
                  className={`transform transition-transform duration-300 ${
                    isReservedInstancesOpen ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`transition-all bg-secondary duration-300 ease-in-out overflow-hidden ${
                  isReservedInstancesOpen
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-4 text-white max-w-lg">
                  <p>
                    For long-term workloads, our Reserved Instances provide
                    lower costs with higher usage. By committing to yearly plan,
                    you get significant savings compared to on-demand pricing.
                    This is perfect for stable workloads like databases and
                    enterprise applications, ensuring predictable costs while
                    maximizing efficiency.{" "}
                    <a href="/pricing" className="text-accent underline">
                      [view pricing]
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
