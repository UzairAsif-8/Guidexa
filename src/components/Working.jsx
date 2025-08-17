import React from "react";
import { motion } from "framer-motion";
function Working({ cards }) {
  return (
    <div className="bg-gray-100 pt-5 pb-12">
      <h1 className="font-sans font-bold text-5xl pb-12 text-center">
        How Guidexa Works
      </h1>

      <div className="flex justify-around bg-gray-100 items-center flex-col  xl:flex-row lg:flex-row gap-8 px-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="w-[80%] lg:w-[30%] xl:w-[30%] md:[50%] p-6 bg-white rounded-2xl shadow-lg shadow-blue-300 duration-300 flex flex-col items-center text-center hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img className="  w-40 h-auto mb-4" src={card.image} alt="logo" />
            <h2 className="font-bold text-xl text-gray-800 mb-2">
              {card.heading}
            </h2>
            <p className="text-center text-gray-600">{card.paragraph}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Working;
