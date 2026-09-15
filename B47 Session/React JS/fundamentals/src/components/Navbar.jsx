import React from "react";

function Navbar() {
  return (
    <nav className="flex md:w-[90%] mx-auto justify-between p-4 items-center bg-white">
      <div>
        <h1 className="font-bold text-2xl">Lazio</h1>
      </div>
      <div>
        <ul className="hidden md:inline-flex space-x-10">
          <li className="text-md">Home</li>
          <li className="text-md">About</li>
          <li className="text-md">Menu</li>
          <li className="text-md">Pages</li>
          <li className="text-md">Contact</li>
        </ul>
      </div>
      <div>
        <button className="border border-black px-5 py-2.5 rounded-4xl border-solid font-bold">
          Book a table
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
