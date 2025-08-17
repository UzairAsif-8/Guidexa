import React from "react";
import logo from "../assets/guidexlogooutline.png";
import { motion } from "motion/react";

function About_guidexa() {
  return (
    <>
      <motion.div className="bg-gray-100 flex flex-col lg:flex-row md:flex-row items-center mt-0">
        <motion.img
          initial={{ opacity: 0, scale: 0.1 }} // Small, low, hidden
          whileInView={{ opacity: 1, scale: 1 }} // Big, visible, in place
          transition={{
            duration: 0.8,
            type: "false",
            stiffness: 80,
            damping: 10,
          }}
          className=" flex xl:h-150  lg:h-150 lg:ml-1 md:h-100 items-center"
          src={logo}
          alt="logo"
        />
        <motion.div className=" lg:w-[40%] ">
          <h1 className="font-sans font-bold  text-5xl pb-2 text-center lg:text-left md:text-left p-3">
            We guide your future with precision
          </h1>
          <p className="text-[16px] text-center lg:text-left md:text-left p-3">
            At Guidexa, we don’t just show you career paths — we help you walk
            them. Our platform combines expert-curated roadmaps with AI-powered
            insights to align your unique skills, passions, and goals. Whether
            you're exploring tech, design, business, or more, we guide you
            step-by-step toward the opportunities that truly fit. With
            personalized support and smart tools, we make your journey focused,
            efficient, and inspiring.
          </p>
          <button className="bg-blue-700 mt-3 text-white text-[18px] rounded-full px-5 py-3  hover:bg-white hover:text-blue-700 hover:cursor-pointer hover:border-1 hover:border-blue-700 mx-auto block lg:mx-0 md:mx-0 ">
            About us
          </button>
        </motion.div>
      </motion.div>
    </>
  );
}

export default About_guidexa;
