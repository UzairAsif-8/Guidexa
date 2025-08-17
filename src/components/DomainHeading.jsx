import React from "react";
import careerRoadmaps from "../components/careerRoadmaps.json";
import { useLocation } from "react-router-dom";
function DomainHeading() {
  const location = useLocation();
  return (
    <>
      <div className="bg-gray-100 flex items-center flex-col">
        <div>
          <h1 className="font-arial-sans-serif font-extrabold text-center text-5xl  mt-8 ">
            {location.state.domain}🚀
          </h1>
          <p className="text-gray-600 text-2xl text-center">
            {location.state.cardData}
          </p>
        </div>
        <div className="w-[90%] h-auto rounded-2xl bg-white p-6 fle flex-col m-10 ">
          <h1 className=" font-extrabold text-blue-800 text-center text-4xl">
            Introduction To {location.state.domain}
          </h1>
          <p className="text-gray-600 text-xl text-center mt-3">
            {location.state.introduction}
          </p>
        </div>
      </div>
    </>
  );
}

export default DomainHeading;
