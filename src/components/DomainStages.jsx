import React from "react";
import { useLocation } from "react-router-dom";
function DomainStages() {
  const location = useLocation();
  return (
    <>
      <div className="bg-gray-100 ">
        {location.state.roadmap.map((data, index) => {
          return (
            <div key={index} className="flex items-center flex-col ">
              <h1 className=" font-extrabold text-center text-4xl">
                {data.stage}
              </h1>
              <p className="text-gray-600 text-xl text-center mt-3">
                {data.description}
              </p>
              {data.key_topics.map((data2, index) => {
                return (
                  <div key={index} className="flex items-center flex-col  ">
                    <div className="xlg:w-5xl lg:w-5xl md:w-4xl  shadow-gray-600 shadow-xs h-auto p-7 m-2 bg-blue-200 rounded-2xl hover:scale-103 hover:shadow-3 hover:shadow-gray-500">
                      <h2 className=" font-extrabold text-blue-800 text-center text-3xl">
                        {data2.topic}
                      </h2>
                      <p className="text-gray-800 text-l text-center">
                        {data2.details}
                      </p>
                    </div>
                  </div>
                );
              })}

              <div className="bg-green-100 w-[90%] rounded-2xl m-2 p-4 flex flex-col items-center">
                <h1 className=" font-extrabold text-green-800 text-xl">
                  Projects to Build 🛠️
                </h1>
                <p className="text-gray-600 text-l">{data.projects}</p>
              </div>
              <div className="bg-yellow-50  w-[90%] rounded-2xl m-2 p-4 flex flex-col items-center mb-1">
                <h1 className=" font-extrabold text-xl text-yellow-800">
                  Tips for this Stage 🌱
                </h1>
                <p className="text-gray-600 text-l">{data.tips}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DomainStages;
