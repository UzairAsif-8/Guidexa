import React, { useState } from "react";
import logo from "../assets/guidexa.png";
import { useNavigate, Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  function changePageToCareer() {
    navigate("/CareerOptions");
  }
  function changePagetoAbout() {
    navigate("/AboutPage");
  }
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar Container */}
      <div className="bg-gray-100 w-full flex flex-col">
        {/* Top Row */}
        <div className="w-full flex items-center justify-between px-4 py-3">
          <img
            src={logo}
            alt="logo"
            className="w-auto h-16 p-2 hover:cursor-pointer"
          />

          {/* Hamburger Button (Mobile Only) */}
          <button
            onClick={toggleMenu}
            className="lg:hidden xl:hidden 2xl:hidden"
          >
            <RxHamburgerMenu className="size-7 mr-2" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10 text-[18px]">
            <Link to="/home" className="relative group">
              Home
              <span
                className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-700 
                scale-x-0 group-hover:scale-x-100 duration-300 origin-center transition-transform"
              ></span>
            </Link>

            <Link to="/AboutPage" className="relative group">
              About us
              <span
                className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-700 
                scale-x-0 group-hover:scale-x-100 duration-300 origin-center transition-transform"
              ></span>
            </Link>

            <a href="#" className="relative group">
              Contact us
              <span
                className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-700 
                scale-x-0 group-hover:scale-x-100 duration-300 origin-center transition-transform"
              ></span>
            </a>

            <button
              onClick={changePageToCareer}
              className="bg-blue-700 text-white text-[16px] rounded-full px-5 py-2 
              hover:bg-white hover:text-blue-700 hover:border hover:border-blue-700 transition"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="flex flex-col items-center space-y-5 py-4 text-[18px] lg:hidden">
            <Link to="/home" className="relative group">
              Home
              <span
                className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-700 
                scale-x-0 group-hover:scale-x-100 duration-300 origin-center transition-transform"
              ></span>
            </Link>

            <Link to="/AboutPage" className="relative group">
              About us
              <span
                className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-700 
                scale-x-0 group-hover:scale-x-100 duration-300 origin-center transition-transform"
              ></span>
            </Link>

            <a href="#" className="relative group">
              Contact us
              <span
                className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-700 
                scale-x-0 group-hover:scale-x-100 duration-300 origin-center transition-transform"
              ></span>
            </a>

            <button
              onClick={changePageToCareer}
              className="bg-blue-700 text-white text-[16px] rounded-full px-5 py-2 
              hover:bg-white hover:text-blue-700 hover:border hover:border-blue-700 transition"
            >
              Get Started
            </button>
          </div>
        )}

        {/* Blue Line */}
        <div className="h-[1px] bg-blue-700 w-[80%] mx-auto mb-4 opacity-50"></div>
      </div>
    </>
  );
}

export default Navbar;
