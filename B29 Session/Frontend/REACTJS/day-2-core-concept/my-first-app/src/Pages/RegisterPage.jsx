import React from "react";
import Input from "../components/Input";

export default function RegisterPage() {
  return (
    <div>
      <h1>Register Form</h1>
      <form action="#" style={{ padding: "32px" }}>
        <Input validType="text" info="enter your details" label="text" />
        <Input validType="email" info="enter your details" label="email" />
        <Input
          validType="password"
          info="enter your details"
          label="password"
        />
      </form>
    </div>
  );
}
