import React from "react";

const ServiceReliability = () => {
  // Array containing reliability features with icons, titles, descriptions
  const reliability = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Fully Redundant Architecture",
      description:
        "Our cloud is designed with multiple failover mechanisms, ensuring no single point of failure.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12h3l2-4 2 8 2-4 2 4 2-4 2 8 2-4h3"
          />
        </svg>
      ),
      title: "High Availability Design",
      description: (
        <>
          Our cloud infrastructure is{" "}
          <span className="font-bold">engineered for 24/7 reliability</span>,
          ensuring seamless operations even during peak demand. We guarantee{" "}
          <span className="font-bold">99.95% uptime</span>, minimizing
          disruptions and keeping your business online.
        </>
      ),
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4"
          />
        </svg>
      ),
      title: "Offsite Backup & Data Protection",
      description:
        "Your critical data is securely backed up at an offsite location, minimizing risks and ensuring fast recovery.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-search w-8 h-8 text-white"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
      title: "Seamless Connectivity with Multi-Uplinks",
      description:
        "Multiple network uplinks provide high-speed, uninterrupted sconnectivity for optimal performance.",
    },
  ];

  return (
    <section className="py-8 md:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary">
            Service Reliability – Built for Uptime
          </h2>
        </div>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reliability.map((reliability, index) => (
            <div
              key={index}
              className="text-center bg-white p-6 rounded-2xl shadow-lg flex flex-col h-full"
            >
              <div>
                {/* Icon Container */}
                <div className="flex justify-center">
                  <div className="bg-[#000099] rounded-full w-16 h-16 flex items-center justify-center">
                    {reliability.icon}
                  </div>
                </div>

                {/* Feature Title */}
                <h3 className="mt-4 text-xl font-bold text-primary">
                  {reliability.title}
                </h3>

                {/* Feature Description */}
                <p className="mt-4 text-gray-600 text-left flex-grow">
                  {reliability.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceReliability;
