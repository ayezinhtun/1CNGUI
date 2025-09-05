import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#283E80] to-black text-white py-8">
      <div className="max-w-7xl mx-auto pt-4 px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: About Us */}
        <div className='text-center md:text-left'>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-white">
          One Cloud Next Generation is a leading local cloud service provider of One Cloud Technology Co., Ltd in Myanmar.

          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className='text-center md:text-left'>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="text-white">
            <li className="mb-2">
              <Link to="/">
                <div className="hover:text-white transition-colors">Home</div>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/about-us">
                <div className="hover:text-white transition-colors">About Us</div>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/products">
                <div className="hover:text-white transition-colors">Products</div>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/solutions">
                <div className="hover:text-white transition-colors">Solutions</div>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/pricing">
                <div className="hover:text-white transition-colors">Pricing</div>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/faq">
                <div className="hover:text-white transition-colors">FAQ</div>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/contact-us">
                <div className="hover:text-white transition-colors">Contact Sales</div>
              </Link>
            </li>
            
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className='text-center md:text-left'>
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
          <ul className="text-white">
            <li className="mb-2">
              <span className="font-semibold">Email:</span> sales@1cloudng.com, support@1cloudng.com

            </li>
            <li className="mb-2">
              <span className="font-semibold">Phone:</span> +95-9-400-635-977, +95-9-400-635-978

            </li>
            <li className="mb-2">
              <span className="font-semibold">Address:</span> Tower A, Room 304, 4th floor, Shwe Zabu River View Complex, Strand Road,  Ahlone Township, Yangon

            </li>
          </ul>
        </div>

        {/* Column 4: Social Media */}
        <div className='text-center md:text-left'>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start items-center space-x-4">
            <a href="https://www.facebook.com/1cloudng" className="text-white hover:text-white transition-colors">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="https://www.linkedin.com/company/1cloudng" className="text-white hover:text-white transition-colors">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="https://www.youtube.com/@1cloudng" className="text-white hover:text-white transition-colors">
              <i className="fab fa-youtube fa-lg"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 mt-8 pt-8 text-center px-4 sm:px-6 lg:px-8">
        <p className="text-white">
          © {new Date().getFullYear()} One Cloud Next Generation. All rights reserved. In Partnership with AYARNET.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
