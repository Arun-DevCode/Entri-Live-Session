import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";

// Navbar , Hero Section, etc
export default function HomePage() {
  console.log("Home Page Rendered");
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}
