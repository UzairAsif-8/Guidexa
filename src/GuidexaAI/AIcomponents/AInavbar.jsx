import React from "react";
import logo from "../../assets/guidexaPNG";
function AInavbar() {
  return (
    <>
      <div className="flex justify-evenly  mt-3">
        <div className="flex ">
          <img className="h-10 w-auto" src="\logo" alt="Guidexa" />
          <h1 className="text-4xl  ml-1  font-medium font-sans">AI</h1>
        </div>
        <div className="  text-center bg-gradient-to-b pt-2 hidden lg:block md:block xl:block  from-blue-400 to-blue-700 text-white px-6 rounded-full hover:cursor-pointer hover:scale-103">
          Your AI companion for smarter career guidance
        </div>
      </div>
      <div className="h-[1px] bg-blue-700 w-[80%] mx-auto mt-6 bottom-0 opacity-50"></div>
    </>
  );
}

export default AInavbar;
