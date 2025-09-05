import React from "react";

const WhyChooseUs = () => {
  // Array containing reasons to choose the service, with icons, titles, and descriptions
  const reasonsToChoose = [
    {
      icon: (
        <svg
          className="w-12 h-12 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Affordable Pricing",
      description:
        "Flexible and transparent pricing with local currency (MMK).",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "High-Speed & Low Latency",
      description: "Optimized servers for fast performance and minimal delays.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      title: "Easy-to-Use Interface",
      description: "Simple cloud management for all skill levels.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
          />
        </svg>
      ),
      title: "Marketplace Integration",
      description: "Sell & deploy cloud-based solutions instantly.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "24/7 Local Support",
      description: "Round-the-clock monitoring and local support.",
    },
  ];
  return (
    <section className="py-8 md:py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Section Heading */}
          <h2 className="text-3xl font-bold text-primary mb-6">
            Why Choose Us?
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto mb-12">
            Discover the key reasons why businesses trust us for their cloud
            solutions.
          </p>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasonsToChoose.map((reason, index) => (
              <div key={index}>
                {/* Reason Card */}
                <div className="bg-white h-full rounded-2xl shadow-xl p-8">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6">
                    {reason.icon}
                  </div>
                  {/* Reason Title */}
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {reason.title}
                  </h3>
                  {/* Reason Description */}
                  <p className="text-lg text-secondary">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
