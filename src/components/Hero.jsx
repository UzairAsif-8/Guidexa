import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/MainLogo.png";
import { useNavigate } from "react-router-dom";
// import CareerOptions from "../pages/CareerOptions";

function Hero() {
  const navigate = useNavigate(); // useNavigate hook ko component ke andar initialize kiya gaya hai

  function changePageToCareer() {
    navigate("/CareerOptions"); // Button click par /CareerOptions route par navigate karega
  }
  return (
    <>
      <div className="bg-gray-100 flex items-center flex-col lg:flex-row  md:flex-row">
        <div>
          <motion.img
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1.5,
              ease: [0.25, 0.46, 0.45, 0.94], // easeOutBack curve
              delay: 0.2,
            }}
            className="img lg:w-180 md:w-200 h-auto m-3 lg:m-10 xl:m-10 w-85 "
            src={logo}
            alt="Logo"
          />
        </div>
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1.5,
              ease: [0.25, 0.46, 0.45, 0.94], // easeOutBack curve
              delay: 0.2,
            }}
            className="font-arial-sans-serif font-extrabold text-center text-5xl  m-8 "
          >
            Find Your Perfect Career Path with Professional <br /> Roadmaps and
            AI-Powered Guidance
          </motion.div>
          <p className="text-gray-600 w-[50%] text-center">
            Guidexa helps you discover the right skills, tools, and roadmap —
            backed by smart suggestions and interactive AI, so you can build
            your career with confidence, clarity, and real-world direction.
          </p>
          <div className="flex">
            <button
              onClick={changePageToCareer}
              className="bg-blue-700 mt-7 w-40 ml-2 text-white text-[18px] rounded-full px-5 py-3  hover:bg-white hover:text-blue-700 hover:cursor-pointer hover:border-1 hover:border-blue-700"
            >
              Start Exploring
            </button>
            <button className="bg-white mt-7 w-40 ml-3 border-1 border-blue-700 text-blue-700 text-[18px] rounded-full px-5 py-3  hover:bg-blue-700 hover:text-white hover:cursor-pointer hover:border-1 hover:border-blue-700">
              About us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
