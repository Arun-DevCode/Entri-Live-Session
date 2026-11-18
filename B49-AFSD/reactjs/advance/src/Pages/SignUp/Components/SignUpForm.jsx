import { useForm } from "react-hook-form";
import Field from "../../../components/Field";
import Button from "../../../components/Button";
import {
  nameValidation,
  emailValidation,
  genderValidation,
  phoneValidation,
  termsValidation,
  passwordValidation,
  confirmPasswordValidation,
} from "../validator/SignUpFormRules";
import "./SignUpForm.css";

// API
import { registerUser } from "../../../api/users/signup";

export default function SignUpForm({ details }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: details.name ?? "",
      email: details.email ?? "",
      phone: "",
      gender: "",
      password: details.password ?? "",
      confirmPassword: "",
      terms: false,
    },
    mode: "onTouched",
  });

  const password = watch("password");

  const onSubmit = async (data) => {
    // Call the client-side API function
    const newFormData = { ...data, phone: Number(data.phone) };
    const result = await registerUser(newFormData);

    if (!result.success) {
      // Handle backend errors (e.g., "Email already exists")
      alert(result.message);
      return;
    }

    alert("Registration successful!");
    console.log("Success data:", result.data);
  };

  return (
    <main className="signup-page">
      <section className="signup-card" aria-labelledby="signup-title">
        <div className="signup-card__eyebrow">
          <span className="signup-card__mark" aria-hidden="true">
            +
          </span>
          YOUR NEXT CHAPTER
        </div>
        <h1 className="signup-card__title" id="signup-title">
          Create your account
        </h1>
        <p className="signup-card__intro">
          Join us today. It only takes a minute to get started.
        </p>

        <form
          className="signup-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="signup-form__fields">
            <Field
              type="text"
              label="Full name"
              placeholder="e.g. Alex Morgan"
              name="name"
              reg={register}
              validation={nameValidation}
              error={errors.name}
              val={details.name}
            />
            <Field
              type="email"
              label="Email address"
              placeholder="you@example.com"
              name="email"
              reg={register}
              validation={emailValidation}
              error={errors.email}
            />
            <Field
              type="select"
              label="Gender"
              placeholder="Select an option"
              name="gender"
              options={[
                { value: "female", label: "Female" },
                { value: "male", label: "Male" },
                { value: "non-binary", label: "Non-binary" },
                { value: "prefer-not-to-say", label: "Prefer not to say" },
              ]}
              reg={register}
              validation={genderValidation}
              error={errors.gender}
            />
            <Field
              type="tel"
              label="Phone number"
              placeholder="+1 (555) 000-0000"
              name="phone"
              reg={register}
              validation={phoneValidation}
              error={errors.phone}
            />
            <Field
              type="password"
              label="Password"
              placeholder="At least 8 characters"
              name="password"
              reg={register}
              validation={passwordValidation}
              error={errors.password}
            />
            <Field
              type="password"
              label="Confirm password"
              placeholder="Enter your password again"
              name="confirmPassword"
              reg={register}
              validation={confirmPasswordValidation(password)}
              error={errors.confirmPassword}
            />
          </div>

          <Field
            type="checkbox"
            label="I agree to the terms and conditions"
            name="terms"
            reg={register}
            validation={termsValidation}
            error={errors.terms}
          />

          <Button
            type="submit"
            name={isSubmitting ? "Creating account..." : "Create account"}
            styles="w-100"
            disabled={isSubmitting}
          />
        </form>
      </section>
      <p className="signup-page__note">
        A better experience starts with a few details.
      </p>
    </main>
  );
}
