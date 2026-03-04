import React from "react";

export default function ProductCard() {
  function handleTheme() {
    document.documentElement.classList.toggle("dark");
  }

  return (
    <div>
      Card
      <button className="bg-black text-white dark:bg-violet-600 dark:text-white dark:shadow rounded px-4 py-2 text-center">
        Get Started
      </button>
      <button onClick={handleTheme}>toggle theme</button>
    </div>
  );
}
