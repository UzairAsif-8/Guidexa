import React from "react";
import { useLocation } from "react-router-dom";

function GeneralTips() {
  const location = useLocation();
  return (
    <>
      <div className="bg-gray-100 flex justify-center p-10">
        <div className="min-w-[70%] max-w-[90%] h-auto rounded-4xl bg-blue-800 text-white text-center">
          <h1 className="text-4xl font-bold pt-5">
            General Tips for Your Journey 💡
          </h1>
          <ul className="text-xl p-2">
            {location.state.general_tips.map((data, index) => {
              return (
                <li className="p-2" key={index}>
                  {data}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default GeneralTips;
