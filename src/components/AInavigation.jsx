import React from "react";
import { useNavigate } from "react-router-dom";

function AInavigation() {
  const navigate = useNavigate();
  let changePageToAIpage = () => {
    navigate("/AIpage");
  };
  return (
    <>
      <div className="bg-gray-100 ">
        <button
          onClick={changePageToAIpage}
          className=" bg-gradient-to-b mx-auto block w-[90%] lg:w-[50%] xl:w-[50%] md:w-[50%] from-blue-400 to-blue-800 text-white px-6 py-3 rounded-full hover:cursor-pointer hover:scale-103"
        >
          <b>Click Here</b> to talk with your AI companion for smarter career
          guidance
        </button>
      </div>
    </>
  );
}

export default AInavigation;
