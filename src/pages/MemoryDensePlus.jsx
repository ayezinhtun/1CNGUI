import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { IoIosPricetags } from "react-icons/io";

// Tab component for individual tab buttons
const Tab = ({ label, active, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors ${
        active
          ? "bg-gray-200 text-black font-semibold shadow-md hover:bg-secondary hover:text-white"
          : "text-gray-700 hover:bg-secondary hover:text-white"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

// TabContent component to render content of the active tab
const TabContent = ({ children, active }) => {
  return active ? <div className="">{children}</div> : null;
};

// CapsuleTabs component to manage tabs and their content
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
  { md: "MDL1+", vcpu: "1", ram: "8", priceHr: "136", priceMo: "99,572" },
  { md: "MDL2+", vcpu: "2", ram: "16", priceHr: "273", priceMo: "199,144" },
  { md: "MDL4+", vcpu: "4", ram: "32", priceHr: "546", priceMo: "398,288" },
  { md: "MDL8+", vcpu: "8", ram: "64", priceHr: "1,091", priceMo: "796,576" },
  { md: "MDL12+", vcpu: "12", ram: "96", priceHr: "1,637", priceMo: "1,194,864" },
  { md: "MDL16+", vcpu: "16", ram: "128", priceHr: "2,182", priceMo: "1,593,152" },
  { md: "MDL24+", vcpu: "24", ram: "192", priceHr: "3,274", priceMo: "2,389,728" },
];

// Data for "Reserved Instances" pricing
const reservedinstances = [
  { md: "MDL1+", vcpu: "1", ram: "8", priceYr: "995,720" },
  { md: "MDL2+", vcpu: "2", ram: "16", priceYr: "1,991,440" },
  { md: "MDL4+", vcpu: "4", ram: "32", priceYr: "3,982,880" },
  { md: "MDL8+", vcpu: "8", ram: "64", priceYr: "7,965,760" },
  { md: "MDL12+", vcpu: "12", ram: "96", priceYr: "11,948,640" },
  { md: "MDL16+", vcpu: "16", ram: "128", priceYr: "15,931,520" },
  { md: "MDL24+", vcpu: "24", ram: "192", priceYr: "23,897,280" },
];

export default function MemoryDensePlus() {
  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <div
        className="relative h-64 text-center flex items-center py-10 md:py-14"
        style={{
          backgroundColor: "#283E80", // Custom background color
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Ccircle cx='100' cy='100' r='80' fill='%23ffffff' fill-opacity='0.1'/%3E%3Ccircle cx='300' cy='200' r='120' fill='%23ffffff' fill-opacity='0.1'/%3E%3Ccircle cx='500' cy='50' r='60' fill='%23ffffff' fill-opacity='0.1'/%3E%3Ccircle cx='700' cy='300' r='100' fill='%23ffffff' fill-opacity='0.1'/%3E%3Ccircle cx='200' cy='350' r='90' fill='%23ffffff' fill-opacity='0.1'/%3E%3Ccircle cx='600' cy='150' r='70' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: "cover", // Cover the entire banner
          backgroundPosition: "center", // Center the pattern
          backgroundRepeat: "no-repeat", // Prevent repetition
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Header Text */}
        <p className="text-white text-sm sm:text-lg max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8 relative z-10">
          <a href="#" className="text-2xl font-bold">
            Deploy
          </a>{" "}
          high-performance cloud instances with ultra-fast NVMe SSD storage and
          flexible, pay-as-you-go pricing. Experience blazing-fast speeds, low
          latency, cost-effective and reliable Cloud Solutions with 99.95% Uptime
          Guarantee, —powered by One Cloud Next-Gen.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div>
          {/* Introductory Text */}
          <div>
            <p className="text-secondary">
              Experience ultra-fast NVMe SSD storage with the flexibility to
              choose the exact size you need. Scale effortlessly and enjoy high
              performance, low latency, and maximum efficiency for your
              workloads.
            </p>
          </div>

          {/* Highlighted Feature */}
          <div className="mt-8 inline-flex items-center justify-center p-4 bg-blue-200 text-secondary text-center">
            <span className="text-sm sm:text-lg font-bold">NVMe SSD</span>
            <div className="w-px h-8 bg-secondary mx-3" />
            <IoIosPricetags className="text-xl" />
            <span className="text-sm sm:text-lg font-bold">
              250 MMK/GB/Month
            </span>
          </div>

          {/* Description */}
          <p className="mt-8 text-secondary">
            Memory-Dense Plus Instances offer a 1:8 CPU-to-memory ratio, providing maximum memory capacity for the most demanding workloads. With high-performance CPUs and ultra-fast NVMe SSD storage.
          </p>

          {/* Capsule Tabs for Pricing Options */}
          <CapsuleTabs>
            {/* Pay as you go Tab */}
            <div label="Pay as you go">
              <div className="overflow-x-auto">
                <table className="min-w-full text-center mt-12">
                  <thead>
                    <tr className="bg-secondary text-white border-b border-primary/10">
                      <th className="p-3">Memory Dense Plus</th>
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
                        <td className="p-3 text-green-700 font-semibold">{plan.md}</td>
                        <td className="p-3 font-semibold">{plan.vcpu}</td>
                        <td className="p-3 font-semibold">{plan.ram}</td>
                        <td className="p-3 font-semibold">{plan.priceHr}</td>
                        <td className="p-3 font-semibold">{plan.priceMo}</td>
                        <td className="p-3">
                          <button className="p-2 rounded-full bg-secondary text-sm text-white hover:bg-blue-700 ">
                            <FaArrowRight />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Reserved Instances Tab */}
            <div label="Reserved Instances">
              <div className="overflow-x-auto">
                <table className="min-w-full text-center mt-12">
                  <thead>
                    <tr className="bg-secondary text-white border-b border-primary/10">
                      <th className="p-3">Memory Dense Plus</th>
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
                        <td className="p-3 text-green-700 font-semibold">{plan.md}</td>
                        <td className="p-3 font-semibold">{plan.vcpu}</td>
                        <td className="p-3 font-semibold">{plan.ram}</td>
                        <td className="p-3 font-semibold">{plan.priceYr}</td>
                        <td className="p-3">
                          <button className="p-2 rounded-full bg-secondary text-sm text-white hover:bg-blue-700 ">
                            <FaArrowRight />
                          </button>
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
