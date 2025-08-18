import React, { useState, useRef, useEffect } from "react";
import { IoIosSend } from "react-icons/io";
import { GoogleGenerativeAI } from "@google/generative-ai";
const ai = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_KEY);
function AIsearch() {
  const [prompt, setprompt] = useState("");
  const [chatHistory, setchatHistory] = useState([]); // user messages
  const [responses, responseHistory] = useState([]); // bot messages

  const sendMessage = async () => {
    if (!prompt.trim()) return;

    // Save user input
    setchatHistory((prev) => [...prev, prompt]);
    let aiText = "";
    // Call Gemini
    try {
      const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);
      aiText = result.response.text();
    } catch {
      alert(
        "Kindly reload the page as our chatbot is experiencing some technical issues! Or Try again later..."
      );
    }

    // Save AI response
    responseHistory((prev) => [...prev, aiText]);

    setprompt(""); // Clear input
  };
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, responses]); // scrolls when new message comes
  return (
    <>
      {/* Chat Area */}
      <div
        ref={chatContainerRef}
        className=" flex flex-col items-center h-[72vh] overflow-y-auto ref={chatContainerRef} mt-4 mb-20 w-full px-4"
      >
        {chatHistory.map((userMsg, index) => (
          <div key={index} className="w-full flex flex-col items-center">
            {/* User Message */}
            <div className="self-end my-2 p-3 h-auto rounded-2xl max-w-[70%] bg-blue-600 text-white shadow break-words whitespace-pre-wrap">
              {userMsg}
            </div>

            {/* AI Response (if exists) */}
            {responses[index] && (
              <div className="self-start my-2 p-3 rounded-2xl max-w-[70%] bg-gray-200 text-black shadow">
                {responses[index]}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <div className="flex justify-center fixed  bottom-7 w-full">
        <input
          value={prompt}
          className="w-[60%] border border-gray-300 rounded-4xl h-10 px-8"
          type="text"
          placeholder="Ask Anything..."
          onChange={(e) => setprompt(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        {prompt !== "" && (
          <button
            onClick={sendMessage}
            className="bg-blue-700 p-1 px-4 mx-2 rounded-4xl hover:cursor-pointer hover:bg-blue-800 hover:scale-105 transition-transform"
          >
            <IoIosSend className="size-8 text-white" />
          </button>
        )}
      </div>
    </>
  );
}

export default AIsearch;
