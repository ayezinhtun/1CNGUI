import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom';

const ContactUs = ({bannerHeight}) => {
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
    <div id='contact' className="min-h-screen">
      {/* Page Header */}
      <div
        className="relative h-64 text-center flex flex-col justify-center items-center py-10 md:py-14"
        style={{
          backgroundColor: "#283E80",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Ccircle cx='100' cy='100' r='80' fill='%23ffffff' fill-opacity='0.1'/%3E%3Ccircle cx='300' cy='200' r='120' fill='%23ffffff' fill-opacity='0.1'/%3E%3Ccircle cx='500' cy='50' r='60' fill='%23ffffff' fill-opacity='0.1'/%3E%3Ccircle cx='700' cy='300' r='100' fill='%23ffffff' fill-opacity='0.1'/%3E%3Ccircle cx='200' cy='350' r='90' fill='%23ffffff' fill-opacity='0.1'/%3E%3Ccircle cx='600' cy='150' r='70' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for darkening the background */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        {/* Animated Page Title */}
        <motion.h1
          className="text-2xl md:text-5xl font-bold text-white relative z-10 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>
        {/* Subtitle */}
        <p className="text-white mt-4 text-sm md:text-lg px-4 sm:px-6 lg:px-8 relative z-10">
          Start Your IaaS Journey with <span className='font-bold'>One Cloud Next Generation</span> Today!<br />
          Experience Fast, Reliable, and Affordable Cloud Solutions!
        </p>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 * 0.2 }}
            className="flex flex-col"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 flex-grow flex flex-col">
              <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
              {/* Form Submission */}
              <form
                action="https://formsubmit.co/sales@1cloudng.com"
                method="POST"
                className="space-y-6 flex-grow flex flex-col"
              >
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-accent focus:border-accent"
                    placeholder="Your Name"
                    required
                  />
                </div>
                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-accent focus:border-accent"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                {/* Message Input */}
                <div className="flex-grow">
                  <label htmlFor="message" className="block text-sm font-medium text-secondary">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="mt-1 block w-full h-5/6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-accent focus:border-accent"
                    placeholder="Your message..."
                    required
                  />
                </div>
                {/* Submit Button */}
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-accent text-white font-semibold rounded-lg hover:bg-[#e69500] transition-all"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Contact Information and Map Section */}
          <div className="flex flex-col gap-12">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2 * 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
                <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-accent mr-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <p className="text-secondary">+95-9-400-635-977, +95-9-400-635-978</p>
                  </div>
                  {/* Email */}
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-accent mr-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-secondary">sales@1cloudng.com, support@1cloudng.com</p>
                  </div>
                  {/* Address */}
                  <div className="flex items-start">
                    <svg
                      className="w-9 h-9 text-accent mr-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="text-secondary">Tower A, Room 304, 4th floor, Shwe Zabu River View Complex, Strand Road, Ahlone Township, Yangon</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3 * 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                <iframe
                  title="Cloud Services Location"
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d61109.386459155736!2d96.0899932423585!3d16.80964689980473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s123%20AI%20Avenue%2C%20Innovation%20District%2C%20Yangon%2C%20Myanmar!5e0!3m2!1sen!2smm!4v1766566523944!5m2!1sen!2smm"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '300px' }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;