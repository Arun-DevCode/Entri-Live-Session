import React from "react";
import Input from "../components/Input";

export default function ContactPage() {
  return (
    <div>
      <form action="#" style={{ padding: "45px" }}>
        {/* Email Field */}
        <Input validType="email" label="Email" info="johndoe@gmail.com" />
        {/* Password Field */}
        <Input validType="password" info="johndoe@2026" label="Password" />
      </form>
    </div>
  );
}
