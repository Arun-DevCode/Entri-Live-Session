import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

// Import Actions
import { createAccount as UserAccount } from "../store/features/userSlice";
import { useSelector } from "react-redux";

export default function CreateProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      bio: "",
    },
  });

  // Dispatch : Declare
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.User);

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
    dispatch(UserAccount(data));
    console.log(userProfile.email);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-xl p-8 shadow-md">
        <div>
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
            Create Your Profile
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Let's get your account set up.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4 rounded-md shadow-sm">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                className={`mt-1 block w-full rounded-md border px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  errors.name
                    ? "border-red-500 ring-1 ring-red-500"
                    : "border-gray-300"
                }`}
                placeholder="John Doe"
                {...register("name", {
                  required: { value: true, message: "Name is required" },
                })}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className={`mt-1 block w-full rounded-md border px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  errors.email
                    ? "border-red-500 ring-1 ring-red-500"
                    : "border-gray-300"
                }`}
                placeholder="you@example.com"
                {...register("email", {
                  required: { value: true, message: "Email is required" },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Bio Field */}
            <div>
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-gray-700"
              >
                Bio
              </label>
              <textarea
                id="bio"
                rows="3"
                className={`mt-1 block w-full rounded-md border px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  errors.bio
                    ? "border-red-500 ring-1 ring-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Tell us a little about yourself..."
                {...register("bio", {
                  required: { value: true, message: "Bio is required" },
                  maxLength: {
                    value: 150,
                    message: "Bio cannot exceed 150 characters",
                  },
                })}
              />
            </div>
            {errors.bio && (
              <p className="mt-1 text-xs text-red-500">{errors.bio.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out"
            >
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
