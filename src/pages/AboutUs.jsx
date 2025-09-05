import React from "react";
import { motion } from "framer-motion";
import TeamStructure from "../components/TeamStructure";

const AboutUs = () => {
  return (
    <div className="pt-20">
      {/* Who We Are and Our Mission Section */}
      <section className="lg:h-screen flex flex-col lg:justify-evenly not-justify-evenly max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Who We Are */}
        <div className="flex flex-col items-center text-center pt-16 lg:pt-0 nhpt nhmwpt">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Who we are
          </motion.h1>
          {/* Description of the company */}
          <p className=" text-secondary text-lg">
            <span className="font-bold">One Cloud Next Gen (1CNG)</span> is a
            trusted <span className="font-bold">local cloud provider</span>{" "}
            offering reliable, high-performance infrastructure designed to serve
            businesses across Myanmar. We focus on delivering{" "}
            <span className="font-bold">
              secure, scalable, and cost-effective cloud solutions
            </span>{" "}
            backed by dedicated local support. Our platform is designed to
            support workloads of all sizes, from small development environments
            to enterprise-grade systems.
          </p>
        </div>

        {/* Our Mission */}
        <div className="pt-10 nhmpt">
          <div className="flex flex-col md:flex-row items-center gap-8 py-5">
            <div className="md:w-1/2 space-y-4">
              {/* Mission Statement */}
              <h2 className="text-3xl text-center font-bold text-primary">
                Our Mission
              </h2>
              <p className="text-lg text-[#283E80]">
                At <span className="font-bold">One Cloud Next-Gen (1CNG)</span>,
                our mission is to{" "}
                <span className="font-bold">empower businesses in Myanmar</span>{" "}
                with secure, high-performance, and locally supported cloud
                infrastructure. We aim to simplify cloud adoption through{" "}
                <span className="font-bold">transparent pricing</span>,
                <span className="font-bold"> easy scalability</span>, and{" "}
                <span className="font-bold">reliable local service</span>,
                helping organizations of all sizes unlock the power of digital
                transformation.
              </p>
            </div>

            <div className="md:w-1/2 flex justify-center">
              {/* Placeholder for an image or illustration */}
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-screen">
        {/* Why 1CNG Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:space-y-16">
          <div
            className={`flex flex-col md:flex-row-reverse items-center gap-8 py-5`}
          >
            <div className="md:w-1/2 space-y-4">
              {/* Why Choose 1CNG */}
              <h2 className="text-3xl text-center font-bold text-primary">
                Why 1CNG?
              </h2>
              <p className="text-lg text-[#283E80]">
                We stand out by combining{" "}
                <span className="font-bold">
                  enterprise-grade infrastructure
                </span>{" "}
                with the{" "}
                <span className="font-bold">advantages of local hosting</span>:
              </p>

              {/* Key Benefits */}
              <ul className="list-disc pl-5 text-lg text-secondary space-y-2">
                <li>
                  <span className="font-bold">Low-latency performance</span> for
                  better speed and responsiveness
                </li>
                <li>
                  <span className="font-bold">Local data residency</span> for
                  compliance and peace of mind
                </li>
                <li>
                  <span className="font-bold">
                    Quick deployment and simplified onboarding
                  </span>
                </li>
                <li>
                  <span className="font-bold">
                    Hands-on, local customer support
                  </span>{" "}
                  that understands your needs
                </li>
              </ul>
            </div>

            <div className="md:w-1/2 flex justify-center">
              {/* Placeholder for an image or illustration */}
            </div>
          </div>

          {/* Partner with Us Section */}
          <div
            className={`flex flex-col md:flex-row items-center gap-8 py-5 md:pb-20`}
          >
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl text-center font-bold text-primary">
                Partner with Us
              </h2>
              <p className="text-lg text-[#283E80]">
                We offer a powerful{" "}
                <span className="font-bold">Reseller Program</span> that helps
                partners grow their business through:
              </p>
              <ul className="list-disc pl-5 text-lg text-secondary space-y-2">
                <li>
                  <span className="font-bold">
                    Wholesale discounts and pricing tiers
                  </span>
                </li>
                <li>
                  <span className="font-bold">
                    Quarterly rebates and incentive programs
                  </span>
                </li>
                <li>
                  <span className="font-bold">Sales and technical support</span>
                  <br />
                  Whether you're an IT consultant, software house, or system
                  integrator, you can expand your services with 1CNG cloud.
                </li>
              </ul>
            </div>

            <div className="md:w-1/2 flex justify-center">
              {/* Placeholder for an image or illustration */}
            </div>
          </div>
        </div>

        {/* Team Structure Component */}
        <TeamStructure />

        {/* Call-to-Action Section */}
        <div className="bg-gray-50 mx-auto pb-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h3
              className="text-lg md:text-2xl font-bold text-primary mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 24 * 0.2 }}
            >
              Ready to Grow Your Business?
            </motion.h3>
            <p className="max-w-7xl mx-auto text-base md:text-lg text-gray-600 mb-12">
              Joining 1CNG is simple. Just{" "}
              <a href="#" className="text-blue-600">
                sign up
              </a>{" "}
              <span className="font-bold">on our platform</span>, choose the
              cloud services you need, and deploy your first instance in
              minutes. We’re here to help you launch, grow, and scale—
              <span className="font-bold">
                all on local infrastructure you can trust
              </span>
              .
            </p>
            <a
              href="/contact-us"
              className="bg-[#ffaa04] text-base md:text-lg text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e69500] transition-colors duration-300"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
