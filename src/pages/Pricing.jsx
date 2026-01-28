import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import ExtraCPUOptimized from "./ExtraCPUOptimized";
import CPUOptimized from "./CPUOptimized";
import Balance from "./Balance";
import MemoryDense from "./MemoryDense";
import MemoryDensePlus from "./MemoryDensePlus";
import { Cpu, Database, Grid, PieChart, Scale, Server, Zap } from "lucide-react";
import { a, div } from "framer-motion/client";

const Pricing = () => {

  const pricings = [
    { id: "section1", title: "Extra CPU Optimized", description: "Start at 24 MMK/hour", icon: <Zap className="w-7 h-7 text-secondary" />, },
    { id: "section2", title: "CPU Optimized", description: "Start at 40 MMK/hour", icon: <Cpu className="w-7 h-7 text-secondary" />, },
    { id: "section3", title: "Balance", description: "Start at 72 MMK/ hour", icon: <PieChart className="w-7 h-7 text-secondary" />, },
    { id: "section4", title: "Memory Dense", description: "Start at 104 MMK/hour", icon: <Server className="w-7 h-7 text-secondary" />, },
    { id: "section5", title: "Memory Dense Plus", description: "Start at 136 MMK/hour", icon: <Database className="w-7 h-7 text-secondary" />, },
  ]
  const [activeId, setActiveId] = useState(pricings[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id); // update activeId
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" } // triggers when the section is roughly in the middle
    );

    pricings.forEach((p) => {
      const section = document.getElementById(p.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Pricing plans data
  const plans = [
    {
      name: "Extra CPU Optimized",
      description:
        "Perfect for balanced workloads with equal CPU and memory needs.",
      price: "Start at 24 MMK/hour",
      features: [
        "Designed for burstable and ultra-intensive workloads",
        "Perfect for real-time analytics, high-frequency trading, and simulations",
        "Higher core count for parallel processing",
        "Best for enterprise-level and mission-critical applications",
      ],
      link: "/extra-cpu-optimized#extra-cpu",
      textColor: "text-[#AE76B5]",
      borderColor: "border-[#7030A0]",
      color: "bg-gradient-to-b from-[#AE76B5] to-indigo-800",
      btnHoverColor: "hover:text-[#7030A0]",
    },
    {
      name: "CPU Optimized",
      description: "Optimized for CPU-intensive workloads.",
      price: "Start at 40 MMK/hour",
      features: [
        "Balanced high-performance CPUs for efficient computing",
        "Optimized for sustained workloads with consistent performance",
        "Ideal for AI, machine learning, and data processing",
        "Lower latency for compute-heavy applications",
        "Scalable for growing business needs",
      ],
      link: "/cpu-optimized#cpu",
      textColor: "text-[#73BFA3]",
      borderColor: "border-[#00B050]",
      color: "bg-gradient-to-b from-[#73BFA3] to-cyan-700",
      btnHoverColor: "hover:text-cyan-700",
    },
    {
      name: "Balance",
      description: "Enhanced CPU performance for demanding applications.",
      price: "Start at 72 MMK/ hour",
      features: [
        "Well-balanced CPU & RAM ratio for versatile workloads",
        "Optimized for general-purpose applications",
        "Stable performance for web hosting, databases, and business apps",
        "Cost-effective solution for medium workloads",
        "Scalable resources to adapt to business growth",
      ],
      link: "/balance#balance",
      textColor: "text-[#73BFA3]",
      borderColor: "border-[#00B050]",
      color: "bg-gradient-to-b from-[#73BFA3] to-cyan-700",
      btnHoverColor: "hover:text-cyan-700",
      mostPopular: true, // Added this flag for the Balance plan
    },
    {
      name: "Memory Dense",
      description: "Maximum CPU power for high-performance computing.",
      price: "Start at 104 MMK/hour",
      features: [
        "High RAM capacity for memory-intensive applications",
        "Optimized for databases, in-memory caching, and big data analytics",
        "Faster processing for large datasets and complex queries",
        "Ensures smooth performance for enterprise applications",
        "Scalable for growing memory demands",
      ],
      link: "/memory-dense#memory",
      textColor: "text-[#73BFA3]",
      borderColor: "border-[#00B050]",
      color: "bg-gradient-to-b from-[#73BFA3] to-cyan-700",
      btnHoverColor: "hover:text-cyan-700",
    },
    {
      name: "Memory Dense Plus",
      description: "Ideal for memory-intensive applications.",
      price: "Start at 136 MMK/hour",
      features: [
        "Maximum RAM allocation for extreme memory-intensive tasks",
        "Designed for large-scale analytics, real-time processing, and AI workloads",
        "Handles massive datasets with minimal latency",
        "Best for high-demand enterprise applications and mission-critical systems",
        "Optimized for ultra-high memory efficiency and performance",
      ],
      link: "/memory-dense-plus#memory-dense-plus",
      textColor: "text-[#EC9C43]",
      borderColor: "border-[#F79646]",
      color: "bg-gradient-to-b from-[#EC9C43] to-orange-600",
      btnHoverColor: "hover:text-orange-600",
    },
  ];



  return (
    <div className="min-h-screen">
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
        <a href="https://portal.1cloudng.com/login" target="_blank">
          <button className="relative z-10 mt-4 text-sm md:text-base bg-accent text-white font-medium px-4 py-2 rounded-lg hover:bg-[#e69900]">
            Get Started
          </button>
        </a>
      </div>

      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12">
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
          <Link
            to="/contact-us#contact"
            className="mt-4 bg-accent text-white font-medium px-4 py-2 rounded-lg hover:bg-[#e69900]"
          >
            Contact Sales
          </Link>
        </div>
        {/* Pricing Grid */}
        <section className="flex gap-4">
          <div className="w-1/4">
            <nav className="sticky h-[85vh] top-24 overflow-y-auto">
              <ul className="space-y-3">
                {pricings.map((p) => {
                  const isActive = activeId === p.id;

                  return (
                    <a href={`#${p.id}`} className="flex flex-col">
                      <li
                        key={p.id}
                        className={`flex items-center gap-2 px-2 transition-all duration-200 ${isActive
                          ? "shadow-md shadow-blue-300 border-none bg-white"
                          : "border border-gray-300 bg-white/80"
                          }`}
                      >
                        <div className="">
                          <span>{p.icon}</span>
                        </div>
                        <a className="block px-3 py-4">
                          <h1 className="font-semibold pb-1">{p.title}</h1>
                          <p className="text-gray-500 text-sm">{p.description}</p>
                        </a>
                      </li>
                    </a>
                  )
                }
                )}
              </ul>
            </nav>


          </div>

          <div className="w-3/4">
            <section id="section1" className="scroll-mt-16">
              <ExtraCPUOptimized />
            </section>
            <section id="section2" className="scroll-mt-16">
              <CPUOptimized />
            </section>
            <section id="section3" className="scroll-mt-16"><Balance /></section>
            <section id="section4" className="scroll-mt-16"><MemoryDense /></section>
            <section id="section5" className="scroll-mt-16"><MemoryDensePlus /></section>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Pricing;