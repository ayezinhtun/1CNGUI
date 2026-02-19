import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import ExtraCPUOptimized from "./ExtraCPUOptimized";
import CPUOptimized from "./CPUOptimized";
import Balance from "./Balance";
import MemoryDense from "./MemoryDense";
import MemoryDensePlus from "./MemoryDensePlus";
import {
  Cpu,
  Database,
  Grid,
  PieChart,
  Scale,
  Server,
  Zap,
} from "lucide-react";

const Pricing = ({ bannerHeight }) => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash !== "#pricing" && hash !== "#prices") return;

    const element = document.querySelector(hash);
    if (element) {
      const yOffset = hash === "#prices" ? 0 : bannerHeight;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset - yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [hash, bannerHeight]);

  const pricings = [
    {
      id: "extra-cpu-optimized",
      title: "Extra CPU Optimized",
      description: "Start at 24 MMK/hour",
      icon: <Zap className="w-7 h-7" />,
    },
    {
      id: "cpu-optimized",
      title: "CPU Optimized",
      description: "Start at 40 MMK/hour",
      icon: <Cpu className="w-7 h-7" />,
    },
    {
      id: "balance",
      title: "Balance",
      description: "Start at 72 MMK/ hour",
      icon: <PieChart className="w-7 h-7" />,
    },
    {
      id: "memory-dense",
      title: "Memory Dense",
      description: "Start at 104 MMK/hour",
      icon: <Server className="w-7 h-7" />,
    },
    {
      id: "memory-dense-plus",
      title: "Extra Memory Dense",
      description: "Start at 136 MMK/hour",
      icon: <Database className="w-7 h-7" />,
    }
  ];
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
      { rootMargin: "-50% 0px -50% 0px" }, // triggers when the section is roughly in the middle
    );

    pricings.forEach((p) => {
      const section = document.getElementById(p.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: {} },
  };

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

      <div className="max-w-7xl mx-auto py-20">
        {/* Section Header */}
        <div id="prices" className="flex flex-col items-center mb-12">
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
            to="/contact-us"
            className="mt-4 bg-accent text-white font-medium px-4 py-2 rounded-lg hover:bg-[#e69900]"
          >
            Contact Sales
          </Link>
        </div>
        {/* Pricing Grid */}
        <section className="flex gap-4">
          <div className="w-1/6">
            <nav className="sticky h-[85vh] top-24 overflow-y-auto scrollbar-hide scroll-smooth">
              <ul className="space-y-2">
                {pricings.map((p) => {
                  const isActive = activeId === p.id;
                  return (
                    <a href={`#${p.id}`} className="flex flex-col">
                      <li
                        key={p.id}
                        className={`flex items-center transition-all duration-200 ${
                          isActive ? "" : ""
                        }`}
                      >
                        <span
                          className={
                            isActive ? "opacity-100 text-secondary" : "opacity-0"
                          }
                        >
                          {p.icon}
                        </span>

                        <a className="block px-3 py-2">
                          <h1
                            className={`font-semibold pb-2 transition-colors duration-200 ${
                              isActive ? "text-secondary" : "text-gray-800"
                            }`}
                          >
                            {p.title}
                          </h1>
                        </a>
                      </li>
                    </a>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="w-4/5">
            <section id="extra-cpu-optimized" className="scroll-mt-16">
              <ExtraCPUOptimized />
            </section>
            <section id="cpu-optimized" className="scroll-mt-16">
              <CPUOptimized />
            </section>
            <section id="balance" className="scroll-mt-16">
              <Balance />
            </section>
            <section id="memory-dense" className="scroll-mt-16">
              <MemoryDense />
            </section>
            <section id="memory-dense-plus" className="scroll-mt-16">
              <MemoryDensePlus />
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pricing;
