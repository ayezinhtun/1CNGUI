import React from "react";
import { motion } from "framer-motion";
import { HiInboxArrowDown } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { GiSettingsKnobs } from "react-icons/gi";
import { FaSquareCheck } from "react-icons/fa6";

const filtersList = [
  "By Industry",
  "By Organization",
  "Solutions by Use Case",
];

const solutions = [
  {
    id: "s1",
    icon: <span>📱</span>,
    title: "Technology & Startups",
    category: "By Industry",
    description: (
      <>
        <div>Launch faster. Scale smarter.</div>
        <div>
          Startups and tech teams need speed, flexibility, and cost control.
          1CNG offers on-demand Cloud Compute, ultra-fast NVMe SSD storage, and{" "}
          <a href="/pricing" className="text-blue-600">
            pay-as-you-go pricing
          </a>{" "}
          in MMK , perfect for agile development, testing environments, and
          scaling production workloads.
        </div>
        <div className="flex"><FaSquareCheck size="20px" color="#283E80" className="mr-1 shrink-0" /> Instant VM deployments</div>
        <div className="flex"><FaSquareCheck size="20px" color="#283E80" className="mr-1 shrink-0" /> Local support with fast turnaround</div>
        <div className="flex"><FaSquareCheck size="20px" color="#283E80" className="mr-1 shrink-0" /> No long-term commitment needed</div>
      </>
    ),
  },
  {
    id: "s2",
    icon: <span>🏦</span>,
    title: "Financial Services",
    category: "By Industry",
    description: (
      <>
        <div>Secure, high-availability cloud for critical workloads</div>
        <div>
          Run core banking apps, payment gateways, and financial services on
          reliable infrastructure with 99.95% uptime. Our platform ensures data
          privacy, local data residency, and backup & disaster recovery options
          to meet regulatory needs.
        </div>
        <div className="flex"><FaSquareCheck size="20px" color="#283E80" className="mr-1 shrink-0" /> Dedicated compute for sensitive operations</div>
        <div className="flex">
          <FaSquareCheck size="20px" color="#283E80" className="mr-1 shrink-0" />
          <div><a href="/pricing" className="text-blue-600">
            Reserved instance
          </a>&nbsp;
            pricing for predictable costs
          </div>
        </div>
        <div className="flex"><FaSquareCheck size="20px" color="#283E80" className="mr-1 shrink-0" /> DR-ready architecture</div>
      </>
    ),
  },
  {
    id: "s3",
    icon: <span>🏥</span>,
    title: "Healthcare & Life Sciences",
    category: "By Industry",
    description: (
      <>
        <div>Healthcare-grade security and reliability</div>
        <div>
          Store EMRs, host healthcare platforms, or run analytics with our{" "}
          <a href="/memory-dense" className="text-blue-600">
            Memory Dense instances
          </a>{" "}
          and secure NVMe storage. Backups, disaster recovery, and
          multi-datacenter redundancy help safeguard sensitive data.
        </div>
        <div className="flex"><FaSquareCheck size="20px" color="#283E80" className="mr-1 shrink-0" /> Isolated cloud environments</div>
        <div className="flex"><FaSquareCheck size="20px" color="#283E80" className="mr-1 shrink-0" /> Automated daily backups</div>
        <div className="flex"><FaSquareCheck size="20px" color="#283E80" className="mr-1 shrink-0" /> HIPAA-aligned infrastructure design</div>
      </>
    ),
  },
  {
    id: "s4",
    icon: <span>🛒</span>,
    title: "Retail & ECommerce",
    category: "By Industry",
    description: (
      <>
        <div>Power your online store with speed and scale</div>
        <div>
          Retail systems demand low-latency performance and scalability. Use
          auto-scaling instances and load balancers to handle flash sales and
          seasonal traffic, while storing images and catalogs on Object Storage.
        </div>
        <div className="flex"><FaSquareCheck size="20px" color="#283E80" className="mr-1 shrink-0" /> Fast checkout experiences</div>
        <div className="flex"><FaSquareCheck size="20px" color="#283E80" className="mr-1 shrink-0" /> Public IPs and DNS for web hosting</div>
        <div className="flex"><FaSquareCheck size="20px" color="#283E80" className="mr-1 shrink-0" /> Auto-scaling to handle peak traffic</div>
      </>
    ),
  },
  {
    id: "s5",
    icon: <span>🎓</span>,
    title: "Education & E-Learning",
    category: "By Industry",
    description: (
      <>
        <div>Digital classrooms with zero downtime</div>
        <div>
          Deploy virtual learning environments, host LMS platforms, and store
          e-learning content—all on reliable cloud compute with flexible
          billing. 1CNG supports scalable storage for video lectures and
          materials.
        </div>
        <div className="flex"><FaSquareCheck size="20px" color="#283E80" className="mr-1 shrink-0" /> Prepaid billing in MMK for budgeting</div>
        <div className="flex"><FaSquareCheck size="20px" color="#283E80" className="mr-1 shrink-0" /> Support for web-based and mobile platforms</div>
        <div className="flex"><FaSquareCheck size="20px" color="#283E80" className="mr-1 shrink-0" /> Backup solutions for course content</div>
      </>
    ),
  },
  {
    id: "s6",
    icon: <span>🏗</span>,
    title: "Manufacturing & Logistics",
    category: "By Industry",
    description: (
      <>
        <div>Operational continuity at every node</div>
        <div>
          From inventory tracking to ERP systems, 1CNG offers{" "}
          <a href="/balance" className="text-blue-600">
            balanced
          </a>{" "}
          and{" "}
          <a href="/memory-dense" className="text-blue-600">
            memory-dense instances
          </a>{" "}
          that ensure operational uptime. Dedicated public IPs and seamless
          network management help support real-time operations.
        </div>
        <div className="flex"><FaSquareCheck size="20px" color="#283E80" className="mr-1 shrink-0" /> Low-latency networks for IoT integration</div>
        <div className="flex"><FaSquareCheck size="20px" color="#283E80" className="mr-1 shrink-0" /> Volume and snapshot management</div>
        <div className="flex"><FaSquareCheck size="20px" color="#283E80" className="mr-1 shrink-0" /> DR and offsite replication for data resilience</div>
      </>
    ),
  },
  {
    id: "s7",
    icon: <span>🧑‍💼</span>,
    title: "Small & Medium Businesses (SMBs)",
    category: "By Organization",
    description: (
      <>
        <div>
          <span className="font-bold">Simple. Scalable. Affordable.</span>
        </div>
        <div>
          Run your websites, business apps, and databases on local
          infrastructure that’s{" "}
          <span className="font-bold">easy to use and budget-friendly.</span>
        </div>
        <ul className="list-disc pl-5 leading-8 pt-2">
          <li>Prepaid billing in MMK</li>
          <li>
            <a href="/pricing" className="text-blue-600">
              Pay-As-You-Go
            </a>{" "}
            hourly pricing
          </li>
          <li>
            Fast deployment with local support
            <br /><div className="flex leading-6 md:leading-8 md:items-center"><FaSquareCheck size="20px" color="#283E80" className="mr-1 shrink-0" />Perfect for retail shops, service providers, and small
              offices</div>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "s8",
    icon: <span>🚀</span>,
    title: "Startups & Tech Builders",
    category: "By Organization",
    description: (
      <>
        <div>
          <span className="font-bold">Build fast. Pivot faster.</span>
        </div>
        <div>
          Launch MVPs, test new ideas, or scale production environments—all with{" "}
          <span className="font-bold">
            developer-friendly tools and flexible pricing.
          </span>
        </div>
        <ul className="list-disc pl-5 leading-8 pt-2">
          <li>High-frequency compute plans</li>
          <li>NVMe SSD storage for fast performance</li>
          <li>
            Ideal for staging, CI/CD, and dynamic workloads
            <br /><div className="flex leading-6 md:leading-8 md:items-center"><FaSquareCheck size="20px" color="#283E80" className="mr-1 shrink-0" /> Tailored for developers, SaaS startups, and local tech
              teams</div>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "s9",
    icon: <span>🏢</span>,
    title: "Enterprises & Large Organizations",
    category: "By Organization",
    description: (
      <>
        <div>
          <span className="font-bold">Enterprises & Large Organizations.</span>
        </div>
        <div>
          Ensure compliance, security, and performance with{" "}
          <span className="font-bold">
            dedicated resources, high availability, and disaster recovery
            capabilities.
          </span>
        </div>
        <ul className="list-disc pl-5 leading-8 pt-2">
          <li>Private cloud and reserved instances</li>
          <li>DR site replication and offsite backups</li>
          <li>
            SLA-backed 99.95% uptime guarantee
            <br /><div className="flex leading-6 md:leading-8 md:items-center"><FaSquareCheck size="20px" color="#283E80" className="mr-1 shrink-0" /> Best fit for banks, telecom, logistics, and public sector</div>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "s10",
    icon: <span>💻</span>,
    title: "Software Houses",
    category: "By Organization",
    description: (
      <>
        <div>
          <span className="font-bold">
            Reliable infrastructure for building, testing, and deploying
            software
          </span>
        </div>
        <div>
          1CNG offers a robust and flexible cloud environment for{" "}
          <span className="font-bold">
            development teams and software firms
          </span>{" "}
          to build, stage, and deliver high-quality applications with speed and
          control.
        </div>
        <ul className="list-disc pl-5 leading-8 py-2">
          <li>
            <span className="font-bold">Instant VM provisioning</span> for dev,
            test, and production environments
          </li>
          <li>
            <span className="font-bold">Customizable compute plans</span> to
            match different project needs (from lightweight APIs to
            high-performance applications)
          </li>
          <li>
            <span className="font-bold">High-frequency CPUs and NVMe SSDs</span>{" "}
            for fast build and deployment cycles
          </li>
          <li>
            <span className="font-bold">Snapshot & backup options</span> for
            version control and rollback
          </li>
          <li>
            <span className="font-bold">Secure access controls</span> for teams
            working across multiple projects
          </li>
          <li>
            <span className="font-bold">Public IPs and DNS</span> for app
            testing and live demos
          </li>
        </ul>
        <div className="flex">
          <FaSquareCheck size="20px" color="#283E80" className="mr-1 shrink-0" /> Ideal for agencies, app developers, and product engineering teams
        </div>
        <div className="font-bold pt-2">
          Focus on coding—we’ll handle the infrastructure.
        </div>
      </>
    ),
  },
  {
    id: "s11",
    icon: <span>🚀</span>,
    title: "Application Hosting",
    category: "Solutions by Use Case",
    description: (
      <>
        <div>
          Host web, mobile, or internal business applications with scalable
          compute and high availability.
        </div>
        <ul className="list-disc pl-5 leading-8 pt-2">
          <li>Deploy VMs instantly with your preferred OS</li>
          <li>Assign public IPs and manage DNS</li>
          <li>
            Use NVMe SSDs for faster response times
            <br />
            <span className="font-bold">Ideal for:</span> SaaS apps, e-commerce
            platforms, internal tools
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "s12",
    icon: <span>🧪</span>,
    title: "Development & Testing Environments",
    category: "Solutions by Use Case",
    description: (
      <>
        <div>Spin up dev, staging, or QA environments without overpaying.</div>
        <ul className="list-disc pl-5 leading-8 pt-2">
          <li>Prepaid hourly billing in MMK</li>
          <li>Snapshot support for rollback</li>
          <li>
            Resize or destroy resources anytime
            <br />
            <span className="font-bold">Ideal for:</span> Software houses,
            agencies, agile teams
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "s13",
    icon: <span>⚙️</span>,
    title: "CI/CD & Automation Workflows",
    category: "Solutions by Use Case",
    description: (
      <>
        <div>
          Automate code delivery with infrastructure that adapts to your
          pipeline.
        </div>
        <ul className="list-disc pl-5 leading-8 pt-2">
          <li>Use lightweight instances for build/test cycles</li>
          <li>Auto-scale during deployment</li>
          <li>
            Secure and isolated per-project environments
            <br />
            <span className="font-bold">Ideal for:</span> DevOps teams, platform
            engineers
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "s14",
    icon: <span>📊</span>,
    title: "Big Data & Analytics",
    category: "Solutions by Use Case",
    description: (
      <>
        <div>
          Run heavy data processing tasks with compute-optimized or memory-dense
          VMs.
        </div>
        <ul className="list-disc pl-5 leading-8 pt-2">
          <li>Scale compute and RAM independently</li>
          <li>Use Block Storage for datasets</li>
          <li>
            Export logs and snapshots as needed
            <br />
            <span className="font-bold">Ideal for:</span> Data teams, BI tools,
            research labs
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "s15",
    icon: <span>🤖</span>,
    title: "AI / Machine Learning Training",
    category: "Solutions by Use Case",
    description: (
      <>
        <div>
          Train, test, and deploy ML models faster with high-frequency CPUs and
          fast storage.
        </div>
        <ul className="list-disc pl-5 leading-8 pt-2">
          <li>Compute-intensive instance types</li>
          <li>NVMe SSDs reduce I/O wait time</li>
          <li>
            Public IPs for model API exposure
            <br />
            <span className="font-bold">Ideal for:</span> AI startups, ML
            engineers, data scientists
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "s16",
    icon: <span>🔁</span>,
    title: "Disaster Recovery & Backup",
    category: "Solutions by Use Case",
    description: (
      <>
        <div>
          Safeguard your critical workloads with automated backups and failover
          capability.
        </div>
        <ul className="list-disc pl-5 leading-8 pt-2">
          <li>Offsite backup with configurable retention</li>
          <li>Multi-zone architecture with fiber-connected DR site</li>
          <li>
            Easy restore from snapshots
            <br />
            <span className="font-bold">Ideal for:</span> Enterprises, financial
            services, healthcare
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "s17",
    icon: <span>📈</span>,
    title: "Auto Scaling for Seasonal or Event-based Traffic",
    category: "Solutions by Use Case",
    description: (
      <>
        <div>Handle peak loads without overpaying when usage is low.</div>
        <ul className="list-disc pl-5 leading-8 pt-2">
          <li>Auto Scaling groups</li>
          <li>Load Balancer integration</li>
          <li>
            Pay-as-you-go billing prevents overprovisioning
            <br />
            <span className="font-bold">Ideal for:</span> E-commerce, media,
            events, promotions
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "s18",
    icon: <span>🌐</span>,
    title: "Website & CMS Hosting",
    category: "Solutions by Use Case",
    description: (
      <>
        <div>
          Deploy websites, blogs, and portals with custom domain support.
        </div>
        <ul className="list-disc pl-5 leading-8 pt-2">
          <li>Fast VMs + DNS + Public IP = Complete hosting stack</li>
          <li>
            Balance between performance and price
            <br />
            <span className="font-bold">Ideal for:</span> Agencies, personal
            brands, content teams
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "s19",
    icon: <span>🛡</span>,
    title: "Secure Internal Systems (ERP, CRM, HRMS)",
    category: "Solutions by Use Case",
    description: (
      <>
        <div>
          Host internal tools securely and ensure 24/7 availability for teams.
        </div>
        <ul className="list-disc pl-5 leading-8 pt-2">
          <li>Private networking</li>
          <li>Custom firewall rules and ACLs</li>
          <li>
            Uptime backed by SLA (99.95%)
            <br />
            <span className="font-bold">Ideal for:</span> Enterprises,
            manufacturers, NGOs
          </li>
        </ul>
      </>
    ),
  },
];

const categories = [
  {
    icon: <span className="text-5xl">🏢</span>,
    name: "By Industry",
    title: "",
    description:
      "Empowering Myanmar’s Businesses with Local Cloud Infrastructure",
  },
  {
    icon: <span className="text-5xl">🏢</span>,
    name: "By Organization",
    title: (
      <>
        <span className="font-bold">
          Cloud built for the way your organization works.
        </span>
      </>
    ),
    description: (
      <>
        Whether you're a small business, a growing startup, or a large
        enterprise,{" "}
        <span className="font-bold">
          1CNG provides flexible, high-performance cloud infrastructure tailored
          to your operational needs—right here in Myanmar.
        </span>
      </>
    ),
  },

  {
    icon: <span className="text-5xl">⚙️</span>,
    name: "Solutions by Use Case",
    title: (
      <>
        <span className="font-bold">Real solutions for real cloud needs.</span>
      </>
    ),
    description:
      "From app hosting to AI workloads, 1CNG offers flexible and powerful cloud infrastructure tailored to the way you build, scale, and operate.",
  },
];

const Solutions = ({bannerHeight}) => {
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

  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isSticky, setIsSticky] = useState(true);
  const sentinelRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // When the sentinel is visible, stop sticky
          setIsSticky(false);
        } else {
          // When the sentinel is out of view, make sticky
          setIsSticky(true);
        }
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.1, // fire when 10% of sentinel is visible
      }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, []);

  const handleFilterChange = (filterName, isChecked) => {
    if (isChecked) {
      setSelectedFilters(prev => [...prev, filterName]);
    } else {
      setSelectedFilters(prev => prev.filter(f => f !== filterName));
    }
  }

  return (
    <div id="solutions" className="min-h-screen">
      <div className="max-w-7xl mx-auto pt-10 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="md:pt-10 ">
          <motion.h1
            className="text-md sm:text-2xl md:text-4xl lg:text-5xl flex items-center font-bold text-primary"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HiInboxArrowDown size="0.87em" />{" "}
            <span className="pl-2">Want a solution tailored to you?</span>
          </motion.h1>
          <div className="text-secondary mt-4 text-md sm:text-lg">
            Our cloud experts can help you design the best architecture for your
            unique needs.
          </div>
          {/* Button  */}
          <div className="mt-5">
            <Link to="/contact-us#contact">
              <button className="bg-accent text-xs sm:text-base text-white px-2 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full hover:bg-white hover:text-accent transition-all duration-300">
                Talk to a Cloud Specialist
              </button>
            </Link>
            <Link to="/pricing#prices" className="ml-4">
              <button className="bg-white text-xs sm:text-base text-accent px-2 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full font-bold hover:bg-accent hover:text-white transition-all duration-300">
                Explore Pricing
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Filter Button */}
        <div className="mt-10 lg:hidden">
          <button
            onClick={() => setShowMobileFilter(true)}
            className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            <GiSettingsKnobs size="25px" color="#404040" />
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
          {/* Sidebar (Desktop & Offcanvas on Mobile) */}
          <div className="lg:col-span-3 lg:mt-8">
            {/* Offcanvas for mobile */}
            <div
              className={`fixed inset-0 z-40 bg-black bg-opacity-30 transition-opacity ${showMobileFilter ? "opacity-100 visible" : "opacity-0 invisible"
                } lg:hidden`}
              onClick={() => setShowMobileFilter(false)}
            />

            <div
              className={`fixed top-0 left-0 bottom-0 z-50 w-72 bg-white lg:bg-transparent border-r shadow transform transition-transform duration-300 py-4 lg:translate-x-0 lg:w-full lg:shadow-none lg:border-none ${showMobileFilter ? "translate-x-0" : "-translate-x-full"
                }
                ${isSticky ? "lg:sticky lg:top-28" : "lg:relative lg:top-auto"}`}
            >
              {/* Close button for mobile */}
              <div className="flex justify-between items-center px-4 mb-4 lg:hidden">
                <h2 className="text-base">FILTER BY</h2>
                <button onClick={() => setShowMobileFilter(false)}>
                  <X />
                </button>
              </div>

              <div className=" bg-white lg:border lg:rounded-lg lg:shadow-md py-4">
                {/* Filters Title */}
                <div className="mb-4 hidden lg:block">
                  <h2 className="text-base px-4 mb-3">FILTER BY</h2>
                  <hr className="border-gray-300" />
                </div>

                {/* Filter By Toggle */}
                <div
                  className="flex items-center justify-between cursor-pointer px-4 py-1"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                >
                  <h3 className="text-base font-semibold tracking-wide text-black">
                    Filters
                  </h3>
                  {isFilterOpen ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </div>

                {/* Scrollable Filter List */}
                {isFilterOpen && (
                  <div className="max-h-[calc(100vh-250px)] overflow-y-auto space-y-2 scrollbar-hide">
                    {filtersList.map((filter, i) => (
                      <div key={i} className="w-full  hover:bg-gray-100 transition">
                        <label
                          className="flex items-center px-4 py-3 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            className="form-checkbox size-4 accent-blue-600 mr-2"
                            checked={selectedFilters.includes(filter)}
                            onChange={(e) => handleFilterChange(filter, e.target.checked)}
                          />
                          <span className="text-base">{filter}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Main content */}
          <div className="lg:col-span-9">
            {/* Solutions Section */}
            {categories
              .filter((category) => {
                // If no filters selected, show all categories
                if (selectedFilters.length === 0) return true;

                // Show category if its name matches any selected filter
                return selectedFilters.includes(category.name);
              })
              .map((category, index) => (
                <div key={index} className="mt-10 lg:mt-14">
                  <div className="mb-4">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                      {category.name}
                    </h2>
                  </div>
                  <div className="text-secondary text-md sm:text-lg">
                    {category.title}
                  </div>
                  <div className="text-secondary text-md sm:text-lg">
                    {category.description}
                  </div>

                  <div className="mt-7 space-y-10">
                    {solutions
                      // .filter((solution) => solution.category === category.name)
                      .filter((solution) => {

                        //filter by category
                        const matchesCategory = solution.category === category.name;

                        const matchesFilters = selectedFilters.length === 0 ||
                          selectedFilters.some(filter => solution.category.includes(filter));

                        return matchesCategory && matchesFilters;

                      })
                      .map((solution) => (
                        <div
                          key={solution.id}
                          className="bg-white/80 backdrop-blur-md rounded-2xl border border-white/20 p-6 shadow-md flex flex-col h-full hover:shadow-xl"
                        >
                          <div className="mb-4">
                            <h3 className="text-xl font-bold text-primary">
                              {solution.title}
                            </h3>
                          </div>
                          <div className="text-gray-600 text-left flex-grow">
                            {solution.description}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div ref={sentinelRef} id="sentinel" className="h-1" />
      </div>

    </div>
  );
};

export default Solutions;
