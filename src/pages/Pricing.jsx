import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Pricing = () => {
  // Pricing plans data
  const plans = [
    {
      name: "Extra CPU Optimized",
      description:
        "Perfect for balanced workloads with equal CPU and memory needs.",
      price: "Start at 23 MMK/hour",
      features: [
        "Designed for burstable and ultra-intensive workloads",
        "Perfect for real-time analytics, high-frequency trading, and simulations",
        "Higher core count for parallel processing",
        "Best for enterprise-level and mission-critical applications",
      ],
      link: "/extra-cpu-optimized",
      textColor: "text-[#AE76B5]",
      borderColor: "border-[#7030A0]",
      color: "bg-gradient-to-b from-[#AE76B5] to-indigo-800",
      btnHoverColor: "hover:text-[#7030A0]",
    },
    {
      name: "CPU Optimized",
      description: "Optimized for CPU-intensive workloads.",
      price: "Start at 38 MMK/hour",
      features: [
        "Balanced high-performance CPUs for efficient computing",
        "Optimized for sustained workloads with consistent performance",
        "Ideal for AI, machine learning, and data processing",
        "Lower latency for compute-heavy applications",
        "Scalable for growing business needs",
      ],
      link: "/cpu-optimized",
      textColor: "text-[#73BFA3]",
      borderColor: "border-[#00B050]",
      color: "bg-gradient-to-b from-[#73BFA3] to-cyan-700",
      btnHoverColor: "hover:text-cyan-700",
    },
    {
      name: "Balance",
      description: "Enhanced CPU performance for demanding applications.",
      price: "Start at 68 MMK/ hour",
      features: [
        "Well-balanced CPU & RAM ratio for versatile workloads",
        "Optimized for general-purpose applications",
        "Stable performance for web hosting, databases, and business apps",
        "Cost-effective solution for medium workloads",
        "Scalable resources to adapt to business growth",
      ],
      link: "/balance",
      textColor: "text-[#73BFA3]",
      borderColor: "border-[#00B050]",
      color: "bg-gradient-to-b from-[#73BFA3] to-cyan-700",
      btnHoverColor: "hover:text-cyan-700",
      mostPopular: true, // Added this flag for the Balance plan
    },
    {
      name: "Memory Dense",
      description: "Maximum CPU power for high-performance computing.",
      price: "Start at 98 MMK/hour",
      features: [
        "High RAM capacity for memory-intensive applications",
        "Optimized for databases, in-memory caching, and big data analytics",
        "Faster processing for large datasets and complex queries",
        "Ensures smooth performance for enterprise applications",
        "Scalable for growing memory demands",
      ],
      link: "/memory-dense",
      textColor: "text-[#73BFA3]",
      borderColor: "border-[#00B050]",
      color: "bg-gradient-to-b from-[#73BFA3] to-cyan-700",
      btnHoverColor: "hover:text-cyan-700",
    },
    {
      name: "Memory Dense Plus",
      description: "Ideal for memory-intensive applications.",
      price: "Start at 128 MMK/hour",
      features: [
        "Maximum RAM allocation for extreme memory-intensive tasks",
        "Designed for large-scale analytics, real-time processing, and AI workloads",
        "Handles massive datasets with minimal latency",
        "Best for high-demand enterprise applications and mission-critical systems",
        "Optimized for ultra-high memory efficiency and performance",
      ],
      link: "/memory-dense-plus",
      textColor: "text-[#EC9C43]",
      borderColor: "border-[#F79646]",
      color: "bg-gradient-to-b from-[#EC9C43] to-orange-600",
      btnHoverColor: "hover:text-orange-600",
    },
  ];

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
          className="text-base lg:text-5xl font-bold text-white relative z-10 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Transparent & Predictable Pricing
        </motion.h1>
        <p className="text-white mt-4 text-sm md:text-lg px-4 sm:px-6 lg:px-8 relative z-10">
          Enjoy flat rates with no hidden fees. All charges are in MMK (local
          currency), ensuring clear and convenient cost management.
        </p>
        <a href="/pricing">
          <button className="relative z-10 mt-4 text-sm md:text-base bg-accent text-white font-medium px-4 py-2 rounded-lg hover:bg-[#e69900]">
            Get Started
          </button>
        </a>
      </div>

      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center">
          <motion.h2
            className="text-3xl font-semibold text-primary text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Choose the Right Plan for Your Workload!
          </motion.h2>
          <p className="text-secondary text-center text-xl">
            Let our sales team assist you in selecting the perfect combination
            of cloud services tailored to your business needs.
          </p>
          <a
            href="/contact-us"
            className="mt-4 bg-accent text-white font-medium px-4 py-2 rounded-lg hover:bg-[#e69900]"
          >
            Contact Sales
          </a>
        </div>
        {/* Pricing Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.7 }}
            >
              <div
                className={`bg-white/80 h-full flex flex-col backdrop-blur-md rounded-2xl border border-white/20 p-8 text-black hover:text-white text-center transition-all duration-300 hover:bg-blue-500/80 relative`}
              >
                {/* Most Popular Label - Only for Balance plan */}
                {plan.mostPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-md px-6 py-1 rounded-full">
                    Most Popular
                  </div>
                )}

                {/* Plan Header */}
                <h2 className="text-xl font-bold mb-6">{plan.name}</h2>

                {/* Plan Price */}
                <p className="text-3xl font-bold mb-6">{plan.price}</p>

                {/* Features List */}
                <ul className="mb-6 space-y-5 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2 flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#ffaa04"
                        className="h-5 w-5 inline-block mr-2 shrink-0"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-left">{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* Plan CTA */}

                {/* Button */}
                <Link to={plan.link}>
                  <button className="bg-white text-blue-500 px-6 py-2 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all duration-300">
                    View All Plans & Pricing
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;