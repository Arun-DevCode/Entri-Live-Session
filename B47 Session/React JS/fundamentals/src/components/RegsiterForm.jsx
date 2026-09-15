import { useForm } from "react-hook-form";
import FieldError from "../error/FieldError";

export default function RegisterForm() {
  const regForm = useForm();

  const handleFormSubmission = (data) => {
    try {
      console.log(data);
    } catch (error) {}
  };

  // Field Errors
  const field = regForm.formState.errors;
  console.log(field.phone);

  
  return (
    <div className="max-w-sm mx-auto p-4 font-sans">
      <form
        className="flex flex-col"
        onSubmit={regForm.handleSubmit(handleFormSubmission)}
      >
        {/* Input Box Group */}
        <div className="border border-gray-300 rounded-sm mb-6 overflow-hidden shadow-sm">
          <input
            type="tel"
            name="phone"
            {...regForm.register("phone", {
              required: {
                value: true,
                message: "Phone Number is required!",
              },
              maxLength: 10,
            })}
            placeholder="Phone number"
            className={`${field.phone ? "border-red-500" : "border-gray-300"} w-full px-4 py-4 text-gray-700 placeholder-gray-500 text-base outline-none border focus:bg-gray-50`}
          />
          {/* Field Error */}
          {field.phone && <FieldError message={field.phone.message} />}
          <input
            type="text"
            name="Name"
            {...regForm.register("Name", {
              required: {
                value: true,
                message: "Name is required!",
              },
              min: {
                value: 3,
                message: "Name should contain at least 32 characters",
              },
            })}
            placeholder="Name"
            className="w-full px-4 py-4 text-gray-700 placeholder-gray-500 text-base outline-none border-b border-gray-300 focus:bg-gray-50"
          />
          {/* Field Error : Name */}
          {field.Name && <FieldError message={field.Name.message} />}
          <input
            type="email"
            placeholder="Email"
            name="Email"
            {...regForm.register("Email", {
              required: true,
            })}
            className="w-full px-4 py-4 text-gray-700 placeholder-gray-500 text-base outline-none focus:bg-gray-50"
          />
        </div>

        {/* Forget Password Link */}
        <a
          href="#referral"
          className="text-[#5173E6] font-medium text-sm mb-6 inline-block hover:underline"
        >
          Forget Password?
        </a>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#FC4C02] hover:bg-[#e04200] text-white font-bold text-sm py-3.5 px-4 rounded-sm uppercase tracking-wider transition-colors mb-2"
        >
          CONTINUE
        </button>

        {/* Terms & Conditions Notice */}
        <p className="text-[11px] text-gray-900 leading-tight">
          By creating an account, I accept the{" "}
          <span className="font-bold">
            Terms &amp; Conditions &amp; Privacy Policy
          </span>
        </p>
      </form>
    </div>
  );
}
