import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { LoginUser } from "../api/user";
import { useNavigate } from "react-router";

function LoginForm() {
  // 1. Initialize the form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Navigator
  const navigate = useNavigate();

  // Read Store State
  const user = useSelector((state) => state.User.data);
  console.log("Store Info : ", user);

  // 2. Define what happens on submit
  const onSubmit = async (data) => {
    // API CALL : Mock API
    const res = await LoginUser(data.email);
    if (!res) {
      alert("Failed to store Create User Account!");
    }

    // User Comparison
    if (res.email !== data.email) {
      alert("Invalid Credentials!");
    }
    console.log("form submission: ", user);

    // navigate to next
    navigate("/dashboard");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 rounded-2xl shadow-xl border border-gray-50 max-w-sm w-full space-y-6"
    >
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
          Welcome Back
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Please enter your details to sign in.
        </p>
      </div>

      <div className="space-y-4">
        {/* Email Field */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1 ml-1">
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            placeholder="alex@example.com"
            className={`w-full px-4 py-3 rounded-xl border outline-none transition-all duration-300 placeholder:text-gray-400 ${
              errors.email
                ? "border-red-500 bg-red-50 focus:ring-red-100"
                : "border-gray-200 bg-gray-50 focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100"
            }`}
          />
          {errors.email && (
            <span className="text-red-500 text-[10px] font-bold ml-1 mt-1 uppercase tracking-tighter">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Password Field */}
        <div>
          <div className="flex justify-between mb-1 ml-1">
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500">
              Password
            </label>
            <a
              href="#"
              className="text-xs font-semibold text-indigo-600 hover:text-indigo-800"
            >
              Forgot?
            </a>
          </div>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters" },
            })}
            type="password"
            placeholder="••••••••"
            className={`w-full px-4 py-3 rounded-xl border outline-none transition-all duration-300 placeholder:text-gray-400 ${
              errors.password
                ? "border-red-500 bg-red-50 focus:ring-red-100"
                : "border-gray-200 bg-gray-50 focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100"
            }`}
          />
          {errors.password && (
            <span className="text-red-500 text-[10px] font-bold ml-1 mt-1 uppercase tracking-tighter">
              {errors.password.message}
            </span>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transform transition active:scale-[0.97] duration-200"
      >
        Sign In
      </button>

      <p className="text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <a href="#" className="font-bold text-indigo-600 hover:underline">
          Create one
        </a>
      </p>
    </form>
  );
}

export default LoginForm;
