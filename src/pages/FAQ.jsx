import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const questions = [
  {
    id: "q7",
    question: "What types of Compute instances does 1CNG offer?",
    categories: ["Services 1CNG offers"],
    answer: (
      <>
        We provide <span className="font-bold">various instance types</span>,
        including{" "}
        <a href="/cpu-optimized" className="text-blue-600">
          CPU-Optimized
        </a>
        ,{" "}
        <a href="/balance" className="text-blue-600">
          Balanced
        </a>
        , and{" "}
        <a href="/memory-dense" className="text-blue-600">
          Memory-Dense plans
        </a>
        , all powered by{" "}
        <span className="font-bold">
          high-performance CPUs and ultra-fast NVMe SSD storage
        </span>
        .
      </>
    ),
  },
  {
    id: "q8",
    question: "How is 1CNG’s cloud compute pricing structured?",
    categories: ["Services 1CNG offers"],
    answer: (
      <>
        We offer{" "}
        <span className="font-bold">
          Pay-As-You-Go (hourly billing) and Reserved Instances
        </span>{" "}
        for long-term savings, all billed in{" "}
        <span className="font-bold">MMK (local currency)</span>.
      </>
    ),
  },
  {
    id: "q9",
    question: "How do I choose the best compute instance for my workload?",
    categories: ["Services 1CNG offers"],
    answer: (
      <>
        Selecting the right plan depends on your application needs:
        <ul className="list-disc pl-5 leading-8 pt-2">
          <li>
            <span className="font-bold">
              Extra CPU Optimized (1:1 CPU to RAM)
            </span>{" "}
            – Best for high-compute tasks like video processing, AI, and
            large-scale simulations.
          </li>
          <li>
            <span className="font-bold">CPU Optimized (1:2 CPU to RAM)</span> –
            Ideal for data analytics, backend processing, and real-time
            applications.
          </li>
          <li>
            <span className="font-bold">Balanced (1:4 CPU to RAM)</span> – A
            good mix of performance and efficiency for general-purpose
            workloads.
          </li>
          <li>
            <span className="font-bold">Memory Dense (1:6 CPU to RAM)</span> –
            Suitable for databases, caching, and memory-intensive workloads.
          </li>
          <li>
            <span className="font-bold">
              Memory Dense Plus (1:8 CPU to RAM)
            </span>{" "}
            – Designed for applications requiring high memory, such as big data
            and enterprise software.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "q10",
    question: "Can I upgrade  my instance later?",
    categories: ["Services 1CNG offers"],
    answer: (
      <>
        Yes! You can <span className="font-bold">scale your instance up</span>{" "}
        based on your changing workload requirements.
      </>
    ),
  },
  {
    id: "q11",
    question: "What storage options are available?",
    categories: ["Services 1CNG offers"],
    answer: (
      <>
        We offer <span className="font-bold">NVMe SSD block storage</span> for
        high-performance workloads and{" "}
        <span className="font-bold">scalable object storage</span> for long-term
        data retention.
      </>
    ),
  },
  {
    id: "q12",
    question: "Can I choose my storage size?",
    categories: ["Services 1CNG offers"],
    answer: (
      <>
        Yes, you can{" "}
        <span className="font-bold">customize your storage size</span> based on
        your workload needs, ensuring flexibility and cost efficiency.
      </>
    ),
  },
  {
    id: "q13",
    question: "Does 1CNG provide public IPs?",
    categories: ["Services 1CNG offers"],
    answer: (
      <>
        Yes, you can purchase{" "}
        <span className="font-bold">dedicated public IPs</span> to enable
        seamless connectivity for your cloud resources.
      </>
    ),
  },
  {
    id: "q14",
    question: "Does 1CNG support auto-scaling?",
    categories: ["Services 1CNG offers"],
    answer: (
      <>
        Yes! Our <span className="font-bold">Auto Scaling feature</span>{" "}
        dynamically adjusts compute resources based on workload demand,
        optimizing performance and cost.
      </>
    ),
  },
  {
    id: "q15",
    question: "Does 1CNG support Kubernetes?",
    categories: ["Services 1CNG offers"],
    answer: (
      <>
        Yes! Our <span className="font-bold">Kubernetes service</span> makes
        container orchestration easy with high availability and seamless
        scaling.
      </>
    ),
  },
  {
    id: "q16",
    question: "How does the Load Balancer work?",
    categories: ["Services 1CNG offers"],
    answer: (
      <>
        Our <span className="font-bold">Load Balancer</span> distributes
        incoming traffic across multiple instances, ensuring{" "}
        <span className="font-bold">
          high availability, reliability, and optimized performance
        </span>
        .
      </>
    ),
  },
  {
    id: "q17",
    question: "What pricing model does 1CNG use?",
    categories: ["How does 1CNG charge?"],
    answer: (
      <>
        1CNG offers a{" "}
        <span className="font-bold">Pay-As-You-Go (hourly billing) model</span>{" "}
        for flexibility and{" "}
        <span className="font-bold">Reserved Instances</span> for long-term
        savings. All charges are billed in{" "}
        <span className="font-bold">MMK (local currency)</span>.
      </>
    ),
  },
  {
    id: "q18",
    question: "How does Pay-As-You-Go pricing work?",
    categories: ["How does 1CNG charge?"],
    answer: (
      <>
        With <span className="font-bold">Pay-As-You-Go</span>, you are billed{" "}
        <span className="font-bold">hourly</span> for the cloud resources you
        use, ensuring you only pay for what you need without long-term
        commitments.
      </>
    ),
  },
  {
    id: "q19",
    question: "What are Reserved Instances, and how do they help save costs?",
    categories: ["How does 1CNG charge?"],
    answer: (
      <>
        Reserved Instances allow you to commit to a{" "}
        <span className="font-bold">long-term workload</span> for a discounted
        rate, following the{" "}
        <span className="font-bold">"Pay Less, Use More"</span> approach. This
        option is ideal for businesses with predictable cloud usage.
      </>
    ),
  },
  {
    id: "q20",
    question: "How will I be charged for my cloud usage?",
    categories: ["How does 1CNG charge?"],
    answer: (
      <>
        Billing is calculated on an{" "}
        <span className="font-bold">hourly basis</span> and charged in{" "}
        <span className="font-bold">MMK (local currency)</span>. You can track
        your usage and charges in the customer portal.
      </>
    ),
  },
  {
    id: "q21",
    question: "What payment methods are accepted?",
    categories: ["How does 1CNG charge?"],
    answer: (
      <>
        Currently, we accept <span className="font-bold">prepaid payments</span>{" "}
        in MMK. More payment options will be available soon.
      </>
    ),
  },
  {
    id: "q22",
    question: "Are there any hidden fees?",
    categories: ["How does 1CNG charge?"],
    answer: (
      <>
        No, 1CNG follows a{" "}
        <span className="font-bold">transparent pricing model</span> with no
        hidden fees. What you see in our pricing plans is what you pay.
      </>
    ),
  },
  {
    id: "q23",
    question: "How do I choose the best plan for my workload?",
    categories: ["How does 1CNG charge?"],
    answer: (
      <>
        Consider your application’s needs:
        <ul className="list-disc pl-5 leading-8 pt-2">
          <li>
            <span className="font-bold">
              Extra CPU Optimized (1:1 CPU to RAM)
            </span>{" "}
            – Best for high-performance computing, AI, and large-scale
            processing.
          </li>
          <li>
            <span className="font-bold">CPU Optimized (1:2 CPU to RAM)</span> –
            Ideal for data analytics and backend processing.
          </li>
          <li>
            <span className="font-bold">Balanced (1:4 CPU to RAM)</span> – A
            general-purpose plan for everyday applications.
          </li>
          <li>
            <span className="font-bold">Memory Dense (1:6 CPU to RAM)</span> –
            Suitable for databases and caching.
          </li>
          <li>
            <span className="font-bold">
              Memory Dense Plus (1:8 CPU to RAM)
            </span>{" "}
            – Designed for memory-intensive applications like big data.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "q24",
    question: "Can I upgrade  my plan?",
    categories: ["How does 1CNG charge?"],
    answer: (
      <>
        Yes! You can <span className="font-bold">scale up</span> based on your
        business needs.
      </>
    ),
  },
  {
    id: "q25",
    question: "What is the uptime guarantee for 1CNG cloud service?",
    categories: ["How does 1CNG commit service uptime?"],
    answer: (
      <>
        We offer a{" "}
        <span className="font-bold">99.95% monthly uptime guarantee</span> for
        each individual instance. This ensures high availability and reliability
        for your workloads.
      </>
    ),
  },
  {
    id: "q26",
    question: "What happens if 1CNG fails to meet the uptime SLA?",
    categories: ["How does 1CNG commit service uptime?"],
    answer: (
      <>
        If uptime falls below 99.95%, we provide service credits as follows:
        <ul className="list-disc pl-5 leading-8 pt-2">
          <li>99% – 99.89% uptime: 10% credit</li>
          <li>95% – 98.99% uptime: 30% credit</li>
          <li>
            Below 95% uptime: 100% credit Service credits are applied to your
            next invoice as additional usage hours.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "q27",
    question: "How is downtime measured?",
    categories: ["How does 1CNG commit service uptime?"],
    answer: (
      <>
        Downtime is tracked by our internal monitoring systems and calculated
        monthly based on the total time the service was unavailable. Scheduled
        maintenance and force majeure events are excluded.
      </>
    ),
  },
  {
    id: "q28",
    question:
      "What response and resolution times can I expect for support issues?",
    categories: ["How does 1CNG commit service uptime?"],
    answer: (
      <>
        We respond within 2 hours for all priorities. Resolution times are as
        follows:
        <ul className="list-disc pl-5 leading-8 pt-2">
          <li>
            <span className="font-bold">Critical:</span> within 4 hours
          </li>
          <li>
            <span className="font-bold">High:</span> within 8 hours
          </li>
          <li>
            <span className="font-bold">Medium:</span> within 24 hours
          </li>
          <li>
            <span className="font-bold">Low:</span> within 72 hours
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "q29",
    question:
      "Are scheduled maintenance periods included in downtime calculations?",
    categories: ["How does 1CNG commit service uptime?"],
    answer: (
      <>
        No. Scheduled maintenance is <span className="font-bold">excluded</span>{" "}
        from uptime calculations. We provide at least{" "}
        <span className="font-bold">48 hours' notice</span> for planned
        maintenance.
      </>
    ),
  },
  {
    id: "q30",
    question: "Can I receive support outside of business hours?",
    categories: ["How does 1CNG commit service uptime?"],
    answer: (
      <>
        Yes. We provide{" "}
        <span className="font-bold">24/7 monitoring and support</span> to
        maintain the uptime and performance of your cloud services.
      </>
    ),
  },
  {
    id: "q31",
    question: "What can I do in the 1CNG Cloud Management Portal?",
    categories: ["Does 1CNG support user self-managed portal?"],
    answer: (
      <>
        You can manage your entire cloud environment from a single dashboard—
        <span className="font-bold">
          launch instances, manage storage, configure networks, assign public
          IPs, monitor usage, and access billing info
        </span>
        .
      </>
    ),
  },
  {
    id: "q32",
    question: "How do I launch a new virtual machine (instance)?",
    categories: ["Does 1CNG support user self-managed portal?"],
    answer: (
      <>
        Easily! Just go to the <span className="font-bold">“Instances”</span>{" "}
        section, click “Launch Instance,” then choose your preferred package, OS
        image, compute plan, and network settings.
      </>
    ),
  },
  {
    id: "q33",
    question: "Can I monitor my usage and billing in the portal?",
    categories: ["Does 1CNG support user self-managed portal?"],
    answer: (
      <>
        Yes. The <span className="font-bold">“Billing”</span> section gives you
        full visibility into your{" "}
        <span className="font-bold">
          resource usage, hourly costs, and prepaid balance
        </span>
        , all in <span className="font-bold">MMK (local currency)</span>.
      </>
    ),
  },
  {
    id: "q34",
    question: "Can I attach extra storage to my instance?",
    categories: ["Does 1CNG support user self-managed portal?"],
    answer: (
      <>
        Yes, you can create and attach{" "}
        <span className="font-bold">
          additional NVMe SSD block storage volumes
        </span>{" "}
        directly from the <span className="font-bold">“Volumes”</span> section
        of the portal.
      </>
    ),
  },
  {
    id: "q35",
    question: "How do I assign or manage public IPs?",
    categories: ["Does 1CNG support user self-managed portal?"],
    answer: (
      <>
        You can request and manage{" "}
        <span className="font-bold">Public IP addresses</span> in the{" "}
        <span className="font-bold">“Network”</span> tab under the{" "}
        <span className="font-bold">“IP Addresses”</span> section.
      </>
    ),
  },
  {
    id: "q36",
    question: "Is it possible to configure firewall or security rules?",
    categories: ["Does 1CNG support user self-managed portal?"],
    answer: (
      <>
        Absolutely. You can{" "}
        <span className="font-bold">create and manage firewall rules</span>,
        port forwarding, and access control lists (ACLs) under your instance or
        network configuration settings.
      </>
    ),
  },
  {
    id: "q37",
    question: "Can I take backups or snapshots of my instance?",
    categories: ["Does 1CNG support user self-managed portal?"],
    answer: (
      <>
        Yes. The portal supports{" "}
        <span className="font-bold">instance snapshots and volume backups</span>
        , which can be managed in the “Snapshots” or “Backup” sections.
      </>
    ),
  },
  {
    id: "q38",
    question: "How do I access support from the portal?",
    categories: ["Does 1CNG support user self-managed portal?"],
    answer: (
      <>
        Click on the <span className="font-bold">“Support” or “Help”</span> tab
        to open a ticket, chat with our team, or browse our help center.
      </>
    ),
  },
  {
    id: "q39",
    question: "Can I scale my instance or upgrade the plan?",
    categories: ["Does 1CNG support user self-managed portal?"],
    answer: (
      <>
        Yes. You can <span className="font-bold">resize your instance</span> to
        a larger plan or a different performance class (e.g., CPU-Optimized,
        Memory-Dense) via the <span className="font-bold">“Resize”</span> option
        in your instance actions menu.
      </>
    ),
  },
  {
    id: "q40",
    question: "Can I invite other team members to my account?",
    categories: ["Does 1CNG support user self-managed portal?"],
    answer: (
      <>
        Yes. You can invite multiple team members to collaborate on your cloud
        projects. Simply go to{" "}
        <span className="font-bold">“Account” &gt; “Users”</span> and click{" "}
        <span className="font-bold">“Add User”</span>. Enter their email, assign
        a role, and send the invitation.
      </>
    ),
  },
];

const categories = [
  "Services 1CNG offers",
  "How does 1CNG charge?",
  "How does 1CNG commit service uptime?",
  "Does 1CNG support user self-managed portal?",
];

const FAQ = ({bannerHeight}) => {
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

  const [selectedCategory, setSelectedCategory] = useState("Filter");
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const itemsPerPage = 5;

  // Filter questions based on selected category
  const filteredQuestions =
    selectedCategory === "Filter"
      ? questions
      : questions.filter((q) => q.categories.includes(selectedCategory));

  // Paginate the filtered questions
  const paginatedQuestions = filteredQuestions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Calculate total pages for pagination
  const totalPages = Math.ceil(filteredQuestions.length / itemsPerPage);

  // Handle previous page navigation
  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  // Handle next page navigation
  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <>
      {/* Main Container */}
      <div id="faq" className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <>
            {/* Header Section */}
            <div
              className="relative h-64 rounded-xl flex flex-col justify-center py-10 md:py-14 px-4 sm:px-6"
              style={{
                backgroundColor: "#283E80", // Custom background color
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Ccircle cx='100' cy='100' r='80' fill='%23ffffff' fill-opacity='0.1'/%3E%3Ccircle cx='300' cy='200' r='120' fill='%23ffffff' fill-opacity='0.1'/%3E%3Ccircle cx='500' cy='50' r='60' fill='%23ffffff' fill-opacity='0.1'/%3E%3Ccircle cx='700' cy='300' r='100' fill='%23ffffff' fill-opacity='0.1'/%3E%3Ccircle cx='200' cy='350' r='90' fill='%23ffffff' fill-opacity='0.1'/%3E%3Ccircle cx='600' cy='150' r='70' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div>
              <motion.h1
                className="text-base lg:text-4xl text-left font-bold text-white relative z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Frequently Asked Questions (FAQ)
              </motion.h1>

              {/* Dropdown for Category Filter */}
              <div className="relative w-full mt-4 sm:mt-6">
                <div
                  className="text-left"
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                >
                  <div className="flex relative items-center justify-between w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 cursor-pointer">
                    <div className="flex items-center">
                      <span>{selectedCategory || "Filter"}</span>
                    </div>
                    <FaChevronDown
                      className={`transition-transform ${isOpen ? "transform rotate-180" : ""
                        }`}
                    />
                  </div>
                  {isOpen && (
                    <div className="absolute z-10 w-full text-sm text-gray-700 bg-white border border-gray-200 rounded-md shadow-lg">
                      <ul className="py-1 text-sm text-gray-700">
                        {categories.map((cat, idx) => (
                          <li
                            key={idx}
                            onClick={() => {
                              setSelectedCategory(cat);
                              setIsOpen(false);
                              setCurrentPage(1); // Reset to first page on category change
                            }}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                          >
                            {cat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Ask a Question Button */}
            <a href="/contact-us">
              <button className="bg-accent hover:bg-[#e69900] w-full mt-4 sm:mt-10 text-white text-sm px-4 py-3 rounded-md transition">
                Ask a Question
              </button>
            </a>

            {/* Questions and Answers List */}
            <div className="space-y-6 mt-10">
              {paginatedQuestions.map((q) => (
                <div key={q.id} className="bg-white shadow p-5 rounded-lg">
                  <h2 className="text-lg font-semibold text-[#0f172a]">
                    {q.question}
                  </h2>
                  <div className="mt-4 border-t pt-4 space-y-3">
                    <div className="">
                      <div className="text-gray-800">{q.answer}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Section */}
            {totalPages > 1 && (
              <div className="mt-10 flex justify-center">
                <nav className="inline-flex items-center space-x-px rounded-lg border border-gray-300 bg-white shadow-sm overflow-hidden text-blue-600 text-sm sm:text-base">
                  {/* Previous Button */}
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="px-3 py-2 hover:bg-gray-100 disabled:text-gray-300 disabled:cursor-not-allowed"
                  >
                    «
                  </button>

                  {/* Page Numbers */}
                  {(() => {
                    const pageButtons = [];
                    let startPage = Math.max(1, currentPage - 1);
                    let endPage = Math.min(totalPages, startPage + 2);

                    // Ensure 3 buttons are shown if possible
                    if (endPage - startPage < 2) {
                      startPage = Math.max(1, endPage - 2);
                    }

                    for (let i = startPage; i <= endPage; i++) {
                      pageButtons.push(
                        <button
                          key={i}
                          onClick={() => setCurrentPage(i)}
                          className={`px-4 py-2 border-l border-gray-200 hover:bg-gray-100 ${currentPage === i ? "font-bold text-blue-800" : ""
                            }`}
                        >
                          {i}
                        </button>
                      );
                    }

                    return pageButtons;
                  })()}

                  {/* Next Button */}
                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 border-l border-gray-200 hover:bg-gray-100 disabled:text-gray-300 disabled:cursor-not-allowed"
                  >
                    »
                  </button>
                </nav>
              </div>
            )}
          </>
        </div>
      </div>
    </>
  );
};

export default FAQ;
