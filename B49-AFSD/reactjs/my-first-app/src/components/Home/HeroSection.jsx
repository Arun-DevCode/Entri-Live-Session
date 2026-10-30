import React from "react";

export default function HeroSection({ name, age, message, users }) {
  console.log(name);
  console.log(age);
  console.log(users);
  console.log(message());
  return (
    <div>
      <h1>Hero Section</h1>
    </div>
  );
}
