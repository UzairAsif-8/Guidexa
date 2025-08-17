import React from "react";
import logo from "../assets/CardImage.png";
import { useNavigate } from "react-router-dom";

function CareerCard() {
  const navigate = useNavigate();

  function changePageToCareer() {
    navigate("/CareerOptions");
  }

  return (
    <div className="bg-gray-100 py-10">
      <div className="w-[90%] md:w-[80%] bg-blue-600 mx-auto rounded-3xl hover:shadow-lg hover:shadow-gray-600 p-6 md:p-10">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Text Section */}
          <div className="flex flex-col md:mr-10 flex-1">
            <h2 className="text-white font-bold font-arial-sans-serif text-xl sm:text-2xl lg:text-3xl px-0 md:px-4 py-2 text-center md:text-left">
              Start Your Career Journey with Guidexa 🚀
            </h2>
            <p className="text-white text-sm sm:text-base lg:text-lg px-0 md:px-4 text-center md:text-left">
              Get smart, personalized suggestions to choose the right domain and
              skills for your future. Explore high-demand careers like Web
              Development, Cybersecurity, AI, and more — all tailored to your
              strengths.
            </p>
            <button
              onClick={changePageToCareer}
              className="bg-gray-800 text-white text-sm sm:text-base rounded-full px-5 py-3 mt-4 mx-auto md:mx-0 hover:bg-gray-700 border border-transparent hover:border-white transition"
            >
              Careers
            </button>
          </div>

          {/* Image Section */}
          <div className="flex justify-center mt-6 md:mt-0 flex-1">
            <img
              className="w-60 sm:w-72 lg:w-80 h-auto object-contain"
              src={logo}
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerCard;
