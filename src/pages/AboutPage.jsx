// src/components/About.jsx
import React from "react";
import logo from "../assets/guidexaPNG.png"; // <-- Replace with your app image
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen flex flex-col items-center p-5">
        {/* Page Heading */}
        <h1 className="text-4xl font-bold text-center mb-5 text-blue-700">
          About Guidexa
        </h1>
        {/* App Image Slot */}
        <div className="w-full max-w-md mb-10">
          <img
            src={logo} // <-- Add your app screenshot here
            alt="Guidexa App"
            className=" w-full h-auto"
          />
        </div>
        {/* Short Description */}
        <p className="text-center text-gray-700 max-w-2xl mb-10 text-lg">
          Guidexa is a platform designed to help students and professionals make
          smart career choices. Explore domains, learn skills, and get
          AI-powered guidance to plan your career journey effectively.
        </p>

        {/* Detailed Description */}
        <div className="bg-white shadow-md rounded-xl p-5 max-w-3xl w-full mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-center text-blue-600">
            Our Mission
          </h2>
          <p className="text-gray-600 text-center mb-3">
            Our mission is to make career guidance simple, accessible, and
            personalized. We aim to help you focus on what truly matters and
            grow in your chosen field.
          </p>
          <p className="text-gray-600 text-center">
            We provide curated resources, AI-powered suggestions, and
            interactive roadmaps so you can track your learning and career
            growth. Whether you are just starting or looking to upskill, Guidexa
            supports you at every step.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
