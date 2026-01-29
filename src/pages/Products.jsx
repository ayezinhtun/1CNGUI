import {
  Cloud,
  Layers,
  Server,
  HardDrive,
  Globe,
  TrendingUp,
  Database,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Define the list of products with their details
const products = [
  {
    title: "Cloud Compute",
    description:
      "Deploy powerful virtual machines in seconds with scalable resources to meet your business needs.",
    icon: <Cloud size={40} className="text-secondary" />,
  },
  {
    title: "Kubernetes",
    description:
      "Automate deployment, scaling, and management of containerized applications with our fully managed Kubernetes service.",
    icon: <Layers size={40} className="text-secondary" />,
  },
  {
    title: "Load Balancer",
    description:
      "Distribute traffic efficiently across multiple instances to ensure high availability and optimal performance.",
    icon: <Server size={40} className="text-secondary" />,
  },
  {
    title: "Block Storage",
    description:
      "Attach high-performance, scalable storage to your cloud instances for flexible data management.",
    icon: <HardDrive size={40} className="text-secondary" />,
  },
  {
    title: "DNS Management",
    description:
      "Easily configure and manage domain name services with fast, secure, and reliable DNS hosting.",
    icon: <Globe size={40} className="text-secondary" />,
  },
  {
    title: "Auto Scaling",
    description:
      "Automatically scale your infrastructure based on demand to optimize performance and cost.",
    icon: <TrendingUp size={40} className="text-secondary" />,
  },
  {
    title: "A2 Object Storage",
    description:
      "Store and retrieve unlimited amounts of data with our secure and cost-effective object storage solution.",
    icon: <Database size={40} className="text-secondary" />,
  },
];

export default function Products() {
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
          Our Customers say
        </motion.h1>
        <p className="text-white mt-4 text-sm sm:text-lg px-4 sm:px-6 lg:px-8 relative">
          "Switching to 1CNG reduced our cloud costs and improved performance.
          The local support is fantastic!"
        </p>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-20 px-4 sm:px-6 lg:px-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Conditional rendering for "Cloud Compute" */}
              {product.title === "Cloud Compute" ? (
                <Link to="/cloudcompute">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
                    <div className="p-6">
                      {product.icon}
                      <h2 className="text-2xl font-semibold text-primary mt-4">
                        {product.title}
                      </h2>
                      <p className="text-secondary mt-2">
                        {product.description}
                      </p>
                      <button className="mt-4 bg-accent text-white font-medium px-4 py-2 rounded-lg hover:bg-[#e69900]">
                        Learn More
                      </button>
                    </div>
                  </div>
                </Link>
              ) : (
                // Default rendering for other products
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
                  <div className="p-6">
                    {product.icon}
                    <h2 className="text-2xl font-semibold text-primary mt-4">
                      {product.title}
                    </h2>
                    <p className="text-secondary mt-2">
                      {product.description}
                    </p>
                    <button
                      disabled
                      className="mt-4 bg-accent text-white font-medium px-4 py-2 rounded-lg hover:bg-[#e69900]"
                    >
                      Coming Soon
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
