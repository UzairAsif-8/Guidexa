import React from "react";
import logo2 from "../assets/guidexaPNGWhite.png";
import logo3 from "../assets/Companylogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faAddressCard,
  faEnvelope,
  faPhone,
  faFileContract,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-neutral-900 flex flex-col items-center py-10 px-4 md:px-8 lg:px-16">
      {/* Logo */}
      <div>
        <img className="h-16 md:h-20 w-auto" src={logo2} alt="Guidexa Logo" />
      </div>

      {/* Tagline */}
      <p className="text-white text-center max-w-2xl mt-4 mb-8 text-sm sm:text-base">
        Discover career paths, internships, and projects tailored to your skills
        and passions. Guidexa connects you with the right opportunities to
        learn, grow, and make an impact — start your journey today.
      </p>

      {/* Footer content */}
      <div className="w-full flex flex-col md:flex-row md:justify-between md:items-start border-t border-b border-gray-600 py-8 gap-8">
        {/* Contact */}
        <div className="flex-1 flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-gray-600 pb-6 md:pb-0 md:pr-6">
          <h2 className="text-white font-medium text-xl mb-4">Contact</h2>
          <div className="flex flex-col gap-3 text-sm sm:text-base">
            <a
              className="text-white hover:text-gray-400 flex items-center gap-3"
              href="mailto:uzair.asif.dev@gmail.com"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              uzair.asif.dev@gmail.com
            </a>
            <a
              className="text-white hover:text-gray-400 flex items-center gap-3"
              href="tel:+923705834161"
            >
              <FontAwesomeIcon icon={faPhone} />
              +92 370 5834161
            </a>
            <a
              className="text-white hover:text-gray-400 flex items-center gap-3"
              href="mailto:contact.axiolink@gmail.com"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              contact.axiolink@gmail.com
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h2 className="text-white font-medium text-xl mb-4">Quick Links</h2>
          <Link
            to="/home"
            className="text-white mb-3 hover:text-gray-400 flex items-center gap-3"
          >
            <FontAwesomeIcon icon={faHouse} /> Home
          </Link>
          <a
            className="text-white mb-3 hover:text-gray-400 flex items-center gap-3"
            href="/AboutPage"
          >
            <FontAwesomeIcon icon={faAddressCard} /> About us
          </a>
          <Link
            to="/Terms&Conditions"
            className="text-white hover:text-gray-400 flex items-center gap-3"
          >
            <FontAwesomeIcon icon={faFileContract} /> Terms &amp; Conditions
          </Link>
        </div>

        {/* About Developer */}
        <div className="flex-1 flex flex-col items-center md:items-start border-t md:border-t-0 md:border-l border-gray-600 pt-6 md:pt-0 md:pl-6">
          <h2 className="text-white font-medium text-xl mb-4">
            About Developer
          </h2>
          <img className="w-32 h-auto mb-4" src={logo3} alt="Company Logo" />
          <p className="text-gray-300 text-center md:text-left text-xs sm:text-sm max-w-xs">
            Built with passion by <b>Muhammad Uzair Asif</b>, dedicated to
            crafting tools that guide and inspire your career journey.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-white text-xs sm:text-sm text-center mt-6">
        &copy; 2025 Guidexa. All rights reserved. Powered by
        <a href="#" className="hover:text-gray-400">
          Axiolink Systems
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
