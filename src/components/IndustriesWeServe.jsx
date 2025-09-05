import React from "react";

const IndustriesWeServe = () => {
  // Array containing industries with their respective icons and descriptions
  const industries = [
    {
      name: "Financial Services",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      description:
        "Secure and compliant cloud solutions for banking, fintech, and financial applications.",
    },
    {
      name: "Healthcare & Life Sciences",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9.5 9h5M12 6.5v5" />
        </svg>
      ),
      description:
        "Reliable infrastructure for patient data management, medical applications, and research analytics.",
    },

    {
      name: "E-Commerce & Retail",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      description:
        "Fast, secure, and scalable hosting for online stores, inventory management, and payment processing.",
    },
    {
      name: "Gaming & Entertainment",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <circle cx="15.5" cy="8.5" r="1.5" />
          <path d="M12 12v4" />
          <path d="M10 14h4" />
        </svg>
      ),
      description:
        "Low-latency cloud infrastructure for online gaming, streaming platforms, and content delivery.",
    },
    {
      name: "Manufacturing & Logistics",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <path d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM8 5h8v2H8V5z" />
        </svg>
      ),
      description:
        "Optimize operations with cloud-based ERP, supply chain management, and IoT applications.",
    },
    {
      name: "Education & E-Learning",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <path d="M22 9.24l-10-5.72-10 5.72 10 5.74 10-5.74zM12 19v-6" />
        </svg>
      ),
      description:
        "Seamless cloud solutions for virtual classrooms, learning management systems, and EdTech platforms.",
    },
  ];

  return (
    <section className="py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2
          className="text-3xl font-bold text-primary text-center mb-8"
        >
          Industries We Serve
        </h2>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div key={index}>
              {/* Industry Card */}
              <div className="flex flex-col items-center text-center h-full bg-gray-50 p-6 rounded-lg shadow-lg">
                {/* Icon */}
                <div className="text-[#ffaa04] mb-4">{industry.icon}</div>
                {/* Industry Name */}
                <h3 className="text-xl font-semibold text-[#283E80] mb-2">
                  {industry.name}
                </h3>
                {/* Industry Description */}
                <p className="text-sm text-gray-600">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
