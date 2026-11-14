// 1. Name
export const nameValidation = {
  required: "Name is required",
  minLength: { value: 2, message: "Name must be at least 2 characters" },
};

// 2. Email
export const emailValidation = {
  required: "Email is required",
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Invalid email address format",
  },
};

// 3. Gender
export const genderValidation = {
  required: "Please select or enter your gender",
};

// 4. Phone
export const phoneValidation = {
  required: "Phone number is required",
  pattern: {
    value: /^[0-9+\-\s()]{7,15}$/,
    message: "Invalid phone number format",
  },
};

// 5. Password
export const passwordValidation = {
  required: "Password is required",
  minLength: { value: 8, message: "Password must be at least 8 characters" },
};

// 6. Confirm Password (requires passwordValue)
export const confirmPasswordValidation = (passwordValue) => ({
  required: "Please confirm your password",
  validate: (value) => value === passwordValue || "Passwords do not match",
});

// 7. Terms
export const termsValidation = {
  required: "You must accept the terms and conditions",
};
