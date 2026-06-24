import React, { useState } from "react";
import { IoMdMic } from "react-icons/io";

export default function App() {
  const [searchKey, setSearchKey] = useState("");
  const [micStatus, setMicStatus] = useState(false); // true

  async function requestMicrophonePermission() {
    //!permission checking
    console.log("Mic Permission Status : ", micStatus);
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.error(
        "Speech recognition/Microphone access is not supported by this browser.",
      );
      alert("Your browser does not support microphone access.");
      return false;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      console.log("Microphone permission granted successfully.");
      stream.getTracks().forEach((track) => track.stop());

      // Mic permission : Activated
      setMicStatus(true);
      console.log("Mic Permission Status :", micStatus);
      return true;
    } catch (error) {
      if (
        error.name === "NotAllowedError" ||
        error.name === "PermissionDeniedError"
      ) {
        console.warn("User denied microphone access.");
        alert(
          "Microphone permission is required for Speech-to-Text. Please enable it in your browser settings.",
        );
      } else if (
        error.name === "NotFoundError" ||
        error.name === "DevicesNotFoundError"
      ) {
        console.warn("No microphone found on this device.");
        alert(
          "No microphone detected. Please plug in a microphone and try again.",
        );
      } else {
        console.error("Error accessing microphone:", error);
      }
      return false;
    }
  }

  return (
    <>
      {/* Elegant Centered Search Bar Component */}
      <div className="w-full max-w-xl mx-auto mt-6">
        <form
          action="#"
          method="GET"
          className="relative flex items-center bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all duration-300"
        >
          {/* Search Icon */}
          <div className="pl-5 text-slate-400 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.603 10.603z"
              />
            </svg>
          </div>
          {/* Input Field */}
          <input
            type="text"
            name="search"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
            placeholder={`${micStatus ? "Speaking.." : "Search for anything..."}`}
            className="w-full py-4 pl-4 pr-32 text-slate-700 placeholder-slate-400 bg-transparent outline-none text-base"
          />
          {/* Action Button */}
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <button
              type="submit"
              onClick={requestMicrophonePermission}
              className={`${micStatus ? "bg-red-600 hover:bg-red-800" : "bg-slate-900 hover:bg-slate-800"}  text-white font-medium px-2 py-2 rounded-full text-sm transition-colors duration-200 shadow-md cursor-pointer`}
            >
              <IoMdMic />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
