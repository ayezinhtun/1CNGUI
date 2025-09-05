import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { IoIosPricetags } from "react-icons/io";

// Tab component for rendering individual tabs
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

// Data for "Pay as you go" plans
const payasyougo = [
  { balance: "BL1", vcpu: "1", ram: "4", priceHr: "72", priceMo: "52,852" },
  { balance: "BL2", vcpu: "2", ram: "8", priceHr: "145", priceMo: "105,704" },
  { balance: "BL4", vcpu: "4", ram: "16", priceHr: "290", priceMo: "211,408" },
  { balance: "BL8", vcpu: "8", ram: "32", priceHr: "579", priceMo: "422,816" },
  { balance: "BL12", vcpu: "12", ram: "48", priceHr: "869", priceMo: "634,224" },
  { balance: "BL16", vcpu: "16", ram: "64", priceHr: "1,158", priceMo: "845,632" },
  { balance: "BL24", vcpu: "24", ram: "96", priceHr: "1,738", priceMo: "1,268,448" },
];

// Data for "Reserved Instances" plans
const reservedinstances = [
  { balance: "BL1", vcpu: "1", ram: "4", priceYr: "528,520" },
  { balance: "BL2", vcpu: "2", ram: "8", priceYr: "1,057,040" },
  { balance: "BL4", vcpu: "4", ram: "16", priceYr: "2,114,080" },
  { balance: "BL8", vcpu: "8", ram: "32", priceYr: "4,228,160" },
  { balance: "BL12", vcpu: "12", ram: "48", priceYr: "6,342,240" },
  { balance: "BL16", vcpu: "16", ram: "64", priceYr: "8,456,320" },
  { balance: "BL24", vcpu: "24", ram: "96", priceYr: "12,684,480" },
];

export default function Balance() {
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

        {/* Header text */}
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

      {/* Main content */}
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div>
          {/* Introductory text */}
          <div>
            <p className="text-secondary">
              Experience ultra-fast NVMe SSD storage with the flexibility to
              choose the exact size you need. Scale effortlessly and enjoy high
              performance, low latency, and maximum efficiency for your
              workloads.
            </p>
          </div>

          {/* Highlighted NVMe SSD pricing */}
          <div className="mt-8 inline-flex items-center justify-center p-4 bg-blue-200 text-secondary text-center">
            <span className="text-sm sm:text-lg font-bold">NVMe SSD</span>
            <div className="w-px h-8 bg-secondary mx-3" />
            <IoIosPricetags className="text-xl" />
            <span className="text-sm sm:text-lg font-bold">
              250 MMK/GB/Month
            </span>
          </div>

          {/* Description of Balanced Instances */}
          <p className="mt-8 text-secondary">
            Balanced Instances offer a 1:4 CPU-to-memory ratio, providing an optimal mix of compute power and memory efficiency. With high-performance CPUs and NVMe SSD storage.
          </p>

          {/* CapsuleTabs for switching between "Pay as you go" and "Reserved Instances" */}
          <CapsuleTabs>
            {/* Pay as you go tab */}
            <div label="Pay as you go">
              <div className="overflow-x-auto">
                <table className="min-w-full text-center mt-12">
                  <thead>
                    <tr className="bg-secondary text-white border-b border-primary/10">
                      <th className="p-3">Balance</th>
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
                        <td className="p-3 text-green-700 font-semibold">{plan.balance}</td>
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

            {/* Reserved Instances tab */}
            <div label="Reserved Instances">
              <div className="overflow-x-auto">
                <table className="min-w-full text-center mt-12">
                  <thead>
                    <tr className="bg-secondary text-white border-b border-primary/10">
                      <th className="p-3">Balance</th>
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
                        <td className="p-3 text-green-700 font-semibold">{plan.balance}</td>
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
