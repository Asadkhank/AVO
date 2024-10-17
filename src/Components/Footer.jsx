import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaFlag,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation(); // Get the current path

  return (
    <footer className="bg-black relative text-gray-400 py-24">
      {/* Conditionally render SVG for non-home pages */}
      {location.pathname !== "/" && (
        <svg
          className="absolute top-0 left-0 w-full transform rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            d="M0,200 L360,250 L1080,340 L720,360 L1440,200 L1440,320 L0,320 Z"
          />
        </svg>
      )}

      <div className="mx-5 md:mx-32 pt-32">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* First Column */}
          <div>
            <h4 className="text-white font-bold mb-4">avo</h4>
            <p className="mb-4">
              Far far away, behind the word mountains, far from the countries.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-500">
                <FaTwitter />
              </a>
              <a href="#" className="text-white hover:text-gray-500">
                <FaFacebook />
              </a>
              <a href="#" className="text-white hover:text-gray-500">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Second Column */}
          <div>
            <h4 className="text-white font-bold mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">&gt; Projects</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">&gt; Team</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">&gt; Reviews</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">&gt; FAQs</a>
              </li>
            </ul>
          </div>

          {/* Third Column */}
          <div>
            <h4 className="text-white font-bold mb-4">About Us</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">&gt; Our Story</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">&gt; Meet the Team</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">&gt; Careers</a>
              </li>
            </ul>
          </div>

          {/* Fourth Column */}
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">&gt; About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">&gt; Press</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">&gt; Contact</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">&gt; Careers</a>
              </li>
            </ul>
          </div>

          {/* Fifth Column */}
          <div>
            <h4 className="text-white font-bold mb-4">Have Questions?</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" /> {/* Map marker icon */}
                <span>
                  203 Fake St. Mountain View, San Francisco, California, USA
                </span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2" /> {/* Phone icon */}
                <span>+2 392 3929 210</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" /> {/* Envelope icon */}
                <span>info@yourdomain.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-500 mt-10">
          <p>
            Copyright ©2024 All rights reserved | This template is made with ❤️
            by Colorlib
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
