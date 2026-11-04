import React from "react";
import { useForm } from "react-hook-form";

export default function SignUpForm() {
  // Form Declare with Default Values
  const { register, handleSubmit } = useForm({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  // Form Submission
  const handleSignUp = (data) => {
    try {
      console.log("Form Submitted : ", { ...data, phone: Number(data.phone) });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form action="#" onSubmit={handleSubmit(handleSignUp)}>
        {/* Name */}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="e.g John Doe"
            name="name"
            {...register("name")}
          />
        </div>
        {/* Email */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="e.g Johndoe@gmail.com"
            name="email"
            {...register("email")}
          />
        </div>
        {/* Phone */}
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            placeholder="e.g 9078563412"
            name="phone"
            {...register("phone")}
          />
        </div>
        {/* Password */}
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="e.g johndoe123"
            name="password"
            {...register("password")}
          />
        </div>

        {/* Submission */}
        <button type="submit">Create Account</button>
      </form>
    </>
  );
}
