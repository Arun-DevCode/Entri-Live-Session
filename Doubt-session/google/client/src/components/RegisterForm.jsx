import { useDispatch, useSelector } from "react-redux";
import { CreateAccount } from "../api/user";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

// Action
import { createUserAccount } from "../store/slices/userSlice";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  // Dispatch Declare
  const dispatch = useDispatch();

  // Read Store State
  const user = useSelector((state) => state.User.data);

  // Navigator
  const navigate = useNavigate();

  // Form Submission
  const FormSubmission = async (data) => {
    // API CALL : Mock API
    const res = await CreateAccount(data);
    if (!res) {
      alert("Failed to store Create User Account!");
    }
    // Store : CreateUserAccount
    dispatch(createUserAccount(res));
    console.log("form submission: ", user);

    // navigate to next
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit(FormSubmission)}
      class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 max-w-sm w-full space-y-5"
    >
      <div class="mb-2">
        <h3 class="text-xl font-semibold text-gray-800">Create Account</h3>
        <p class="text-sm text-gray-500">Get started with your free account.</p>
      </div>

      <div>
        <label class="block text-sm font-semibold text-gray-600 mb-1">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          {...register("fullName", {
            required: {
              value: true,
              message: "full name is required!",
            },
          })}
          placeholder="John Doe"
          class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
        />

        {/* Field error */}
        {errors.fullName && (
          <p className="text-red-600 font-light mt-1">
            {errors.fullName.message}
          </p>
        )}
      </div>

      <div>
        <label class="block text-sm font-semibold text-gray-600 mb-1">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required!",
            },
          })}
          placeholder="name@company.com"
          class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
        />
      </div>

      <div>
        <label class="block text-sm font-semibold text-gray-600 mb-1">
          Password
        </label>
        <input
          type="password"
          name="password"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required!",
            },
          })}
          placeholder="••••••••"
          class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
        />
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transform transition active:scale-[0.98]"
      >
        Sign Up
      </button>
    </form>
  );
}

export default RegisterForm;
