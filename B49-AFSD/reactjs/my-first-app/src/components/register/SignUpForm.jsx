import { useForm } from "react-hook-form";
import ErrorDisplay from "./error/errorDisplay";

export default function SignUpForm() {
  //Form Validation : Declare Option
  const { register, handleSubmit, formState, getValues } = useForm({
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      profile: "",
    },
  });

  // Form Submission
  const handleSignUp = (data) => {
    try {
      console.log("Form Submitted : ", {
        ...data,
        phone: Number(data.phone),
        name: data.name?.trim(),
      });
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
            {...register("name", {
              required: {
                value: true,
                message: "Name is required!",
              },
              minLength: {
                value: 3,
                message: "Name should be 32 characters",
              },
              // pattern: '//',
              maxLength: 64,
              validate: (val) => {
                if (val.trim().length > 0) {
                  console.log("Valid succeed!!");
                } else {
                  console.log("Name is required!");
                }
              },
            })}
          />
          {/* Error Display */}
          <ErrorDisplay errorMessage={formState.errors.name?.message} />
        </div>
        {/* Email */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="e.g Johndoe@gmail.com"
            name="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required!",
              },
              validate: (val) => val.includes("@") || "Incorrect Email",
            })}
          />
          {/* Error Display */}
          <ErrorDisplay errorMessage={formState.errors.email?.message} />
        </div>
        {/* Phone */}
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            placeholder="e.g 9078563412"
            name="phone"
            {...register("phone", {
              valueAsNumber: true,
              required: {
                value: true,
                message: "Phone number is require!",
              },
              validate: {
                hasNumber: (val) => /\d/.test(val) || "Incorrect Phone Number!",
              },
            })}
          />
          {/* Error Display */}
          <ErrorDisplay errorMessage={formState.errors.phone?.message} />
        </div>
        {/* Password */}
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="e.g johndoe123"
            name="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required!",
              },
              deps: ["confirmPassword"],
              // min: {
              //   value: 8,
              //   message: "Password should be 8 or above characters!!",
              // },
              // validate: {
              //   hasNumber: (val) => /\d/.test(val) || "Include number [0-9]",
              //   hasUpper: (val) =>
              //     val.toUpperCase() || "Include capital letters [A-Z]",
              //   hasLower: (val) =>
              //     val.toLowerCase() || "Include small letters [a-z]",
              // },
            })}
          />
          {/* Error Display */}
          <ErrorDisplay errorMessage={formState.errors.password?.message} />
        </div>
        {/* Confirm Password */}
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            placeholder="e.g johndoe123"
            name="confirmPassword"
            {...register("confirmPassword", {
              required: {
                value: true,
                message: "Confirm password is required!",
              },
              validate: (val) =>
                val === getValues("password") || "Password do not match!!",
            })}
          />
          {/* Error Display */}
          <ErrorDisplay
            errorMessage={formState.errors.confirmPassword?.message}
          />
        </div>

        {/* File Upload */}
        <div>
          <label htmlFor="Profile">Profile</label>
          <input
            type="file"
            accept="image/png,image/jpg"
            {...register("profile", {
              require: {
                value: true,
                message: "Profile is required!",
              },
              validate: {
                size: (files) =>
                  files[0]?.size <= 2 * 1024 * 1024 ||
                  "File Support less than 2 MB!",
              },
            })}
          />

          <ErrorDisplay errorMessage={formState.errors.profile?.message} />
        </div>

        {/* Submission */}
        <button type="submit">Create Account</button>
      </form>
    </>
  );
}
