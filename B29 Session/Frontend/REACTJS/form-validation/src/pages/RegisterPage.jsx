import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  // } = useForm();

  const formField = useForm({
    defaultValues: {
      Name: "",
      Email: "",
      Password: "",
      Feedback: "",
    },
  });

  const UserRegister = async (userData) => {
    console.log("Form Submitted : ", userData);
  };

  const FormSubmission = formField.handleSubmit(UserRegister);

  const FieldErrors = formField.formState.errors;

  //! Please avoid to use this in production application -> Development
  if (Object.keys(FieldErrors).length > 0) {
    console.log("Form Errors:", FieldErrors);
  }

  const keyTyper = formField.watch("Feedback", 0).length;
  console.log(keyTyper);

  return (
    <div className="m-5">
      <form
        action="#"
        onSubmit={FormSubmission}
        className="flex flex-col gap-2"
      >
        {/* Name Field */}
        <div>
          <label htmlFor="Name" className="text-slate-500">
            Name
          </label>
          <input
            type="text"
            data-invalid={FieldErrors.Name}
            name="Name"
            placeholder="John Doe"
            className={`border border-gray-300 px-2.5 w-full mt-1 focus:outline-none ${FieldErrors.Name ? "focus:border-2 focus:border-red-500" : ""}`}
            {...formField.register("Name", {
              required: {
                value: true,
                message: "Enter your full name!",
              },
              minLength: {
                value: 3,
                message: "Name is should contains min 3 to 32 letters.",
              },
              maxLength: {
                value: 32,
              },
            })}
          />
          {/* Name Field Error */}
          {FieldErrors.Name ? (
            <p className="text-xs text-red-500">{FieldErrors.Name.message}</p>
          ) : null}
        </div>
        {/* Email Field */}
        <div>
          <label htmlFor="Name" className="text-slate-500">
            Email
          </label>
          <input
            type="email"
            name="Email"
            placeholder="John Doe"
            className="border border-gray-300 px-2.5 w-full mt-1"
            {...formField.register("Email", {
              required: {
                value: true,
                message: "Enter your email!",
              },
              pattern: {
                value: `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`,
                message: "Email is not valid email address!",
              },
            })}
          />
        </div>
        {/* Password Field */}
        <div>
          <label htmlFor="Name" className="text-slate-500">
            Password
          </label>
          <input
            type="password"
            name="Password"
            placeholder="John Doe"
            className="border border-gray-300 px-2.5 w-full mt-1"
            {...formField.register("Password", {
              required: {
                value: true,
                message: "Enter your email!",
              },
            })}
          />
        </div>

        <div className="flex flex-col gap-1.5 relative">
          <label htmlFor="Feedback">Feedback Message</label>
          <textarea
            name="Feedback"
            id="SessionFeedback"
            className="border border-gray-300 resize-none h-32"
            {...formField.register("Feedback", {
              required: {
                value: true,
                message: "Feedback is required!",
              },
            })}
          ></textarea>
          <span className="absolute right-3 bottom-3 text-slate-500">
            {keyTyper}/250
          </span>
        </div>
        {/* Form Submit */}
        <button type="submit" className="bg-teal-500 text-white rounded py-1">
          Submit
        </button>
      </form>
    </div>
  );
}
