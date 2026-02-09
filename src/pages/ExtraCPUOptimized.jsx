import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoIosPricetags } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

// Tab component for rendering individual tabs
const Tab = ({ label, active, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors ${active
        ? "bg-gray-200 text-black font-semibold shadow-md hover:bg-secondary hover:text-white"
        : "text-gray-700 hover:bg-secondary hover:text-white"
        }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

// TabContent component for rendering content of the active tab
const TabContent = ({ children, active }) => {
  return active ? <div className="">{children}</div> : null;
};

// CapsuleTabs component for managing tabs and their content
const CapsuleTabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mt-12">
      <div className="flex items-center gap-2 md:gap-5">
        {/* Text label before tabs (not a tab) */}
        <span className="font-bold">Payment Options</span>

        {/* Tabs container */}
        <div className="flex space-x-2">
          {children.map((child, index) => (
            <Tab
              key={index}
              label={child.props.label}
              active={activeTab === index}
              onClick={() => setActiveTab(index)}
            />
          ))}
        </div>
      </div>

      {/* Render content of the active tab */}
      {children.map((child, index) => (
        <TabContent key={index} active={activeTab === index}>
          {child.props.children}
        </TabContent>
      ))}
    </div>
  );
};

// Data for "Pay as you go" pricing
const payasyougo = [
  { extraCPU: "eCO1", vcpu: "1", ram: "1", priceHr: "24", priceMo: "17,812" },
  { extraCPU: "eCO2", vcpu: "2", ram: "2", priceHr: "49", priceMo: "35,624" },
  { extraCPU: "eCO4", vcpu: "4", ram: "4", priceHr: "98", priceMo: "71,248" },
  { extraCPU: "eCO8", vcpu: "8", ram: "8", priceHr: "195", priceMo: "142,496" },
  {
    extraCPU: "eCO12",
    vcpu: "12",
    ram: "12",
    priceHr: "293",
    priceMo: "213,744",
  },
  {
    extraCPU: "eCO16",
    vcpu: "16",
    ram: "16",
    priceHr: "390",
    priceMo: "284,992",
  },
  {
    extraCPU: "eCO24",
    vcpu: "24",
    ram: "24",
    priceHr: "586",
    priceMo: "427,488",
  },
];

// Data for "Reserved Instances" pricing
const reservedinstances = [
  { extraCPU: "eCO1", vcpu: "1", ram: "1", priceYr: "178,120" },
  { extraCPU: "eCO2", vcpu: "2", ram: "2", priceYr: "356,240" },
  { extraCPU: "eCO4", vcpu: "4", ram: "4", priceYr: "712,480" },
  { extraCPU: "eCO8", vcpu: "8", ram: "8", priceYr: "1,424,960" },
  { extraCPU: "eCO12", vcpu: "12", ram: "12", priceYr: "2,137,440" },
  { extraCPU: "eCO16", vcpu: "16", ram: "16", priceYr: "2,849,920" },
  { extraCPU: "eCO24", vcpu: "24", ram: "24", priceYr: "4,274,880" },
];

// Main component for rendering the page
export default function ExtraCPUOptimized({ bannerHeight }) {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        const yOffset = bannerHeight;
        const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [hash, bannerHeight]);
  return (
    <div id="extra-cpu" className="min-h-screen">
      {/* Main content */}
      <div className="max-w-7xl mx-auto pb-10 px-4 sm:px-6 lg:px-8">
        <div>
          <div>
            {/* Introductory text */}
            <p className="text-secondary">
              Experience ultra-fast NVMe SSD storage with the flexibility to
              choose the exact size you need. Scale effortlessly and enjoy high
              performance, low latency, and maximum efficiency for your
              workloads.
            </p>
          </div>

          {/* Pricing highlight */}
          <div className="mt-8 inline-flex items-center justify-center p-4 bg-blue-200 text-secondary text-center">
            <span className="text-sm sm:text-lg font-bold">NVMe SSD</span>
            <div className="w-px h-8 bg-secondary mx-3" />
            <IoIosPricetags className="text-xl" />
            <span className="text-sm sm:text-lg font-bold">
              292 MMK/GB/Month
            </span>
          </div>

          {/* Additional description */}
          <p className="mt-8 text-secondary">
            Extra CPU-Optimized Instances offer a 1:1 CPU-to-Memory ratio,
            delivering superior processing power with high-frequency CPUs (1
            GHz+) and ultra-fast NVMe SSD storage.
          </p>

          {/* Tabs for pricing options */}
          <CapsuleTabs>
            {/* Pay as you go tab */}
            <div label="Pay as you go">
              <div className="overflow-x-auto">
                <table className="min-w-full text-center mt-12">
                  <thead>
                    <tr className="bg-secondary text-white border-b border-primary/10">
                      <th className="p-3">Extra CPU Optimized</th>
                      <th className="p-3">vCPU (cores)</th>
                      <th className="p-3">Ram (GiB)</th>
                      <th className="p-3">MMK/Hour</th>
                      <th className="p-3">MMK/Month</th>
                      <th className="p-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {payasyougo.map((plan, index) => (
                      <tr
                        key={index}
                        className="text-secondary border-b border-secondary/10"
                      >
                        <td className="p-3 text-green-700 font-semibold">
                          {plan.extraCPU}
                        </td>
                        <td className="p-3 font-semibold">{plan.vcpu}</td>
                        <td className="p-3 font-semibold">{plan.ram}</td>
                        <td className="p-3 font-semibold">{plan.priceHr}</td>
                        <td className="p-3 font-semibold">{plan.priceMo}</td>
                        <td className="p-3">
                          <Link target="blank" to='https://portal.1cloudng.com/login'>
                            <button className="p-2 rounded-full bg-secondary text-sm text-white hover:bg-blue-700 ">
                              <FaArrowRight />
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Reserved Instances tab */}
            <div label="Reserved Instances">
              <div className="overflow-x-auto">
                <table className="min-w-full text-center mt-12">
                  <thead>
                    <tr className="bg-secondary text-white border-b border-primary/10">
                      <th className="p-3">Extra CPU Optimized</th>
                      <th className="p-3">vCPU (cores)</th>
                      <th className="p-3">Ram (GiB)</th>
                      <th className="p-3">Reserved 1 Year</th>
                      <th className="p-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {reservedinstances.map((plan, index) => (
                      <tr
                        key={index}
                        className="text-secondary border-b border-secondary/10"
                      >
                        <td className="p-3 text-green-700 font-semibold">
                          {plan.extraCPU}
                        </td>
                        <td className="p-3 font-semibold">{plan.vcpu}</td>
                        <td className="p-3 font-semibold">{plan.ram}</td>
                        <td className="p-3 font-semibold">{plan.priceYr}</td>
                        <td className="p-3">
                          <Link target="blank" to='https://portal.1cloudng.com/login'>
                            <button className="p-2 rounded-full bg-secondary text-sm text-white hover:bg-blue-700 ">
                              <FaArrowRight />
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </CapsuleTabs>
        </div>
      </div>
    </div>
  );
}
