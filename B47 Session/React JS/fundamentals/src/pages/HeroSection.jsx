import React from "react";
import Contact from "../components/contact";
import Navbar from "../components/Navbar";
import bannerImg from "../assets/banner.jpg";

export default function HeroSection() {
  return (
    <header className="shadow min-h-screen">
      <Contact />
      <Navbar />
      <section className="bg-[url(`/src/assets/banner.jpg`)] h-full bg-cover bg-center flex justify-center items-center">
        <div className="w-[40%] mx-auto text-center">
          <h1 className="font-bold">Best Food for your taste</h1>
          <p className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            accusantium aut nulla non praesentium libero ullam iusto et facere
            voluptates, dignissimos earum animi nihil qui aspernatur amet
            consequatur atque aliquam?
          </p>

          <div className="inline-flex space-x-5">
            <button>Book a table</button>
            <button>Explore Menu</button>
          </div>
        </div>
      </section>
    </header>
  );
}
