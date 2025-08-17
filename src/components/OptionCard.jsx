import React from "react";
import careerRoadmaps from "./careerRoadmaps.json";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Framer Motion import

function OptionCard() {
  const navigate = useNavigate();
  function changeToDomainRoadmaps(domainData) {
    navigate("/DomainRoadmaps", { state: domainData });
  }

  return (
    <div className="bg-gray-100">
      <h1 className="font-arial-sans-serif font-extrabold text-center text-5xl pt-8 mb-3">
        Pick Your Starting Point
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto text-center">
        You don't need to master everything in this AI era. Just understand the
        basics and move forward — Guidexa will guide you step by step.
      </p>

      <div className="justify-center items-center gap-6 grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 2xl:grid-cols-3 sm:grid-cols-1 p-6 max-w-6xl mx-auto">
        {careerRoadmaps.map((getData, index) => {
          return (
            <motion.div
              key={index}
              className="max-w-sm h-60 bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between border border-gray-100 hover:shadow-2xl hover:scale-[1.03]"
              // ✅ Simple fade + slide up animation
              initial={{ opacity: 0, y: 30 }} // pehle thoda neeche aur transparent
              whileInView={{ opacity: 1, y: 0 }} // viewport me aate hi appear ho jaye
              viewport={{ once: true }} // ek baar hi trigger ho
              transition={{ duration: 0.6, delay: index * 0.2 }} // stagger effect
            >
              <h2 className="text-2xl font-bold text-blue-700">
                {getData.domain}
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                {getData.CardData}
              </p>
              <button
                onClick={() => {
                  changeToDomainRoadmaps(getData);
                  console.log(getData);
                }}
                className="bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800 hover:cursor-pointer"
              >
                Explore Career →
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default OptionCard;
