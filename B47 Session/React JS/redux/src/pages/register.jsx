import { useState } from "react";
import { useForm } from "react-hook-form";
import { userActions } from "../store/slices/user";
import { useDispatch } from "react-redux";

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Dispatch : Manipulate state
  const dispatch = useDispatch();

  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);
    // Simulate API request delay
    setTimeout(() => {
      setIsLoading(false);
      setSubmittedData(data);
      setIsSubmitted(true);

      dispatch(userActions.createUser(data));
    }, 1200);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans antialiased text-slate-800">
      <div className="w-full max-w-md">
        {}
        <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl border border-white/40 p-8 sm:p-10 transition-all duration-300">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-200 mb-4 transform hover:scale-105 transition-transform duration-300">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  Create Account
                </h1>
                <p className="text-sm text-slate-500 mt-1">
                  Join our community and get started today
                </p>
              </div>

              {/* Form Start */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
                noValidate
              >
                {/* Username Field */}
                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5"
                    htmlFor="Username"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </span>
                    <input
                      type="text"
                      id="Username"
                      placeholder="John Doe"
                      className={`w-full pl-11 pr-4 py-3 bg-slate-50/50 border rounded-xl text-sm transition-all duration-200 outline-none focus:bg-white focus:ring-4 ${
                        errors.Username
                          ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                          : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-100"
                      }`}
                      {...register("Username", {
                        required: { value: true, message: "Name is required!" },
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                      })}
                    />
                  </div>
                  {errors.Username && (
                    <p className="mt-1.5 text-xs text-red-500 flex items-center font-medium animate-fadeIn">
                      <span className="mr-1">⚠️</span> {errors.Username.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5"
                    htmlFor="Email"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                    <input
                      type="email"
                      id="Email"
                      placeholder="e.g. abc@gmail.com"
                      className={`w-full pl-11 pr-4 py-3 bg-slate-50/50 border rounded-xl text-sm transition-all duration-200 outline-none focus:bg-white focus:ring-4 ${
                        errors.Email
                          ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                          : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-100"
                      }`}
                      {...register("Email", {
                        required: {
                          value: true,
                          message: "Email is required!",
                        },
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Please enter a valid email address",
                        },
                      })}
                    />
                  </div>
                  {errors.Email && (
                    <p className="mt-1.5 text-xs text-red-500 flex items-center font-medium animate-fadeIn">
                      <span className="mr-1">⚠️</span> {errors.Email.message}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5"
                    htmlFor="Password"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="Password"
                      placeholder="e.g. abc@2026"
                      className={`w-full pl-11 pr-12 py-3 bg-slate-50/50 border rounded-xl text-sm transition-all duration-200 outline-none focus:bg-white focus:ring-4 ${
                        errors.Password
                          ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                          : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-100"
                      }`}
                      {...register("Password", {
                        required: {
                          value: true,
                          message: "Password is required!",
                        },
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 focus:outline-none"
                    >
                      {showPassword ? (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                  {errors.Password && (
                    <p className="mt-1.5 text-xs text-red-500 flex items-center font-medium animate-fadeIn">
                      <span className="mr-1">⚠️</span> {errors.Password.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3.5 px-4 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold rounded-xl shadow-lg shadow-indigo-200 transition-all duration-200 flex items-center justify-center space-x-2 focus:outline-none focus:ring-4 focus:ring-indigo-100 disabled:opacity-75"
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span>Creating account...</span>
                      </>
                    ) : (
                      <span>Create Account</span>
                    )}
                  </button>
                </div>
              </form>

              <div className="mt-6 text-center text-xs text-slate-500">
                Already have an account?{" "}
                <a
                  href="#login"
                  onClick={(e) => e.preventDefault()}
                  className="font-semibold text-indigo-600 hover:underline"
                >
                  Log in
                </a>
              </div>
            </>
          ) : (
            <div className="text-center py-6 animate-fadeIn">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-4 shadow-inner">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Registration Successful!
              </h2>
              <p className="text-sm text-slate-500 mb-6">
                Welcome aboard,{" "}
                <span className="font-semibold text-slate-700">
                  {submittedData?.Username}
                </span>
                ! Your account has been created.
              </p>

              <div className="bg-slate-50 rounded-2xl p-4 mb-6 text-left border border-slate-100 space-y-2">
                <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Summary Details
                </div>
                <div className="text-sm text-slate-700 flex justify-between">
                  <span className="text-slate-500">Email:</span>
                  <span className="font-medium">{submittedData?.Email}</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl shadow-md transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-slate-100"
              >
                Register Another Account
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
