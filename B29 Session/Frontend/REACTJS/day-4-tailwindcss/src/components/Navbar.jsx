import React from "react";
import { FaShoppingBag } from "react-icons/fa";

export default function Navbar() {
  return (
    <header>
      <div className="flex justify-between p-5 w-[90%] mx-auto">
        <h1 className="font-semibold text-2xl">Panto</h1>
        <nav className="hidden sm:inline">
          <ul className="flex gap-2.5">
            <li>Furniture</li>
            <li>Shop</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </nav>
        {/* Shop CTA */}
        <button>
          {/* Shop Icon */}
          <FaShoppingBag size={22} />
        </button>
      </div>
    </header>
  );
}
