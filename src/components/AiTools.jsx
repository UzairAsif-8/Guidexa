import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/guidexlogooutline.png";

function AiTools() {
  const location = useLocation();
  return (
    <div className="bg-gray-100 w-[100%] flex flex-col items-center ">
      <h1 className="font-arial-sans-serif font-extrabold text-center text-4xl p-7 ">
        Essential AI Tools
      </h1>
      <div className=" bg-white h-auto w-[90%] p-7 rounded-4xl">
        {location.state.ai_tools.map((data, index) => {
          return (
            <div key={index} className=" ">
              <div className=" h-40 pt-2 lg:rounded-4xl xl:rounded-full 2xl:rounded-full rounded-4xl bg-indigo-100 border-indigo-300 border-2  shadow-md shadow-gray-300 mb-7 flex flex-col  hover:scale-101 hover:cursor-pointer">
                <h1 className="text-center text-indigo-950 lg:pt-4 xl:pt-4 2xl:pt-4 md:pt-3 sm:pt-2 text-3xl font-bold">
                  {data.name}
                </h1>
                <p className="text-center p-1 text-sm lg:text-md text-indigo-800">
                  {data.description}
                </p>
                <p
                  className="text-center p-1 font-semibold text-blue-900 
              invisible md:visible md:text-sm xl:text-lg"
                >
                  {data.benefits}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AiTools;
