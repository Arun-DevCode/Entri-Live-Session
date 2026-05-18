import React from "react";

export default function App() {
  return (
    <div className="m-5 ">
      <h1 className="sm:text-teal-500 sm:text-2xl mb-2.5 text-entri">
        Welcome to Entri App
      </h1>

      {/* <button className="bg-black text-white px-4 py-2 hover:border-2 hover:border-red-500">
        Register
      </button> */}

      {/* <input
        type="text"
        placeholder="enter your name"
        className="focus:outline-none"
      /> */}
      <p className="text-entri text-40xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        nostrum vero illum accusantium sapiente repellendus ratione architecto
        perspiciatis eius, odit, porro, in deleniti veniam explicabo maiores?
        Voluptatibus esse incidunt iste?
      </p>

      <button className="primary-btn">subscribe</button>
      <button>Register</button>

      <button>Click me</button>

      <h1 className="text-[136px] text-[#F54927]">Font Size - Tailwindcss</h1>
    </div>
  );
}
