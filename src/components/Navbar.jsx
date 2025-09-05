import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/OneCloud-Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State for resources dropdown toggle
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  // State to track if the user has scrolled
  const [scrolled, setScrolled] = useState(false);

  // Refs for handling clicks outside dropdowns
  const desktopDropdownRef = useRef(null); // Separate ref for desktop
  const mobileDropdownRef = useRef(null); // Separate ref for mobile

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle resources dropdown visibility
  const toggleResourcesMenu = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  useEffect(() => {
    // Handle scroll to add/remove scrolled class
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Close dropdown if clicked outside
    const handleClickOutside = (event) => {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target) &&
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target)
      ) {
        setIsResourcesOpen(false);
      }
    };

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`navbar text-primary fixed w-full z-50 ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold ">
              <img src={logo} className="w-40" alt="OneCloud Logo" />
            </Link>
          </div>

          {/* Middle links (hidden on mobile) */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4 lg:ml-6">
            {/* Navigation links */}
            <Link to="/">
              <div className="hover:text-primaryHover px-3 py-2 rounded-md text-md font-medium">
                Home
              </div>
            </Link>
            <Link to="/about-us">
              <div className="hover:text-primaryHover px-3 py-2 rounded-md text-md font-medium">
                About Us
              </div>
            </Link>
            <Link to="/products">
              <div className="hover:text-primaryHover px-3 py-2 rounded-md text-md font-medium">
                Products
              </div>
            </Link>
            <Link to="/solutions">
              <div className="hover:text-primaryHover px-3 py-2 rounded-md text-md font-medium">
                Solutions
              </div>
            </Link>
            <Link to="/pricing">
              <div className="hover:text-primaryHover px-3 py-2 rounded-md text-md font-medium">
                Pricing
              </div>
            </Link>

            {/* Resources Dropdown */}
            <div className="relative" ref={desktopDropdownRef}>
              <button
                onClick={toggleResourcesMenu}
                className="hover:text-primaryHover px-3 py-2 rounded-md text-md font-medium flex items-center"
              >
                Resources
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${
                    isResourcesOpen ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown menu */}
              {isResourcesOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                  <Link
                    to="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    Tutorials
                  </Link>
                  <Link
                    to="/faq"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    FAQ
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    Product Docs
                  </Link>
                </div>
              )}
            </div>

            <Link to="/contact-us">
              <div className="hover:text-primaryHover px-3 py-2 rounded-md text-md font-medium">
                Contact Sales
              </div>
            </Link>
          </div>

          {/* Auth links on the right (hidden on mobile) */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <a
              href="#"
              className="bg-primary hover:shadow-sm hover:bg-transparent hover:border hover:border-primary hover:text-primary text-white px-4 py-2 rounded-lg text-md font-medium"
            >
              Sign In
            </a>
            <a
              href="#"
              className="ml-4 bg-primary hover:shadow-sm hover:bg-transparent hover:border hover:border-primary hover:text-primary text-white px-4 py-2 rounded-lg text-md font-medium"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile menu button (visible on mobile) */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-white hover:bg-secondary focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (visible on mobile) */}
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} lg:hidden`}>
        <div className="px-2 pt-2 pb-6 space-y-1 text-center">
          {/* Mobile navigation links */}
          <a href="/">
            <div className="block hover:text-primaryHover px-3 py-2 rounded-md text-base font-medium">
              Home
            </div>
          </a>
          <a href="/about-us">
            <div className="block hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium">
              About Us
            </div>
          </a>
          <a href="/products">
            <div className="block hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium">
              Products
            </div>
          </a>
          <a href="/solutions">
            <div className="block hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium">
              Solutions
            </div>
          </a>
          <a href="/pricing">
            <div className="block hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium">
              Pricing
            </div>
          </a>

          {/* Mobile Resources Dropdown */}
          <div className="relative" ref={mobileDropdownRef}>
            <button
              onClick={toggleResourcesMenu}
              className="w-full hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium flex items-center justify-center"
            >
              Resources
              <svg
                className={`w-4 h-4 ml-1 transition-transform ${
                  isResourcesOpen ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown menu */}
            {isResourcesOpen && (
              <div className="pl-4">
                <a
                  href="#"
                  className="block py-2 hover:text-gray-600 rounded px-2"
                >
                  Tutorials
                </a>
                <a
                  href="/faq"
                  className="block py-2 hover:text-gray-600 rounded px-2"
                >
                  FAQ
                </a>
                <a
                  href="#"
                  className="block py-2 hover:text-gray-600 rounded px-2"
                >
                  Product Docs
                </a>
              </div>
            )}
          </div>

          <a href="/contact-us">
            <div className="block hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium">
              Contact Sales
            </div>
          </a>
          <div className="flex items-center justify-center space-x-4">
            <a
              href="#"
              className="bg-primary hover:shadow-sm hover:bg-transparent hover:border hover:border-primary hover:text-primary text-white px-4 py-2 rounded-md text-md font-medium"
            >
              Sign In
            </a>
            <a
              href="#"
              className="ml-4 bg-primary hover:shadow-sm hover:bg-transparent hover:border hover:border-primary hover:text-primary text-white px-4 py-2 rounded-md text-md font-medium"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
