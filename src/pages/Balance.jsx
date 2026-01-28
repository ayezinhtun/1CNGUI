import { FaArrowRight } from "react-icons/fa";
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
    <div className="min-h-screen" id="balance">
      {/* Main content */}
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div>
          {/* Introductory text */}
          <div>
            <h1 className="text-secondary font-extrabold text-3xl pb-6">Balance</h1>

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
              292 MMK/GB/Month
            </span>
          </div>

          {/* Description of Balanced Instances */}
          <p className="mt-8 text-secondary">
            Balanced Instances offer a 1:4 CPU-to-memory ratio, providing an optimal mix of compute power and memory efficiency. With high-performance CPUs and NVMe SSD storage.
          </p>

          {/* CapsuleTabs for switching between "Pay as you go" and "Reserved Instances" */}
          <>
            {/* Pay as you go tab */}
            <div label="Pay as you go">
              <div className="overflow-x-auto mt-12">
                <div className="flex">
                  <p className="bg-gray-200 text-secondary font-semibold shadow-md px-4 py-2 rounded-full text-sm md:text-base transition-colors mb-4">
                    Pay as you go
                  </p>
                </div>
                <table className="min-w-full text-center">
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
              <div className="overflow-x-auto mt-12">
                <div className="flex">
                  <p className="bg-gray-200 text-secondary font-semibold shadow-md px-4 py-2 rounded-full text-sm md:text-base transition-colors mb-4">
                    Reserved Instances
                  </p>
                </div>
                <table className="min-w-full text-center">
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
          </>
        </div>
      </div>
    </div>
  );
}
