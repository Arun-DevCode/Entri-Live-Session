//* Element Select
const fields = document.querySelectorAll("input");
const SignUpform = document.querySelector("form");

// Form Data
let formData = {
  name: "",
  email: "",
  password: "",
};

//* Attach event : Input
for (const field of fields) {
  field.addEventListener("change", (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // Update Field Dynamic
    if (name in formData) {
      //* Main Logic
      formData = { ...formData, [name]: value };
    }

    // Form Submission
    validator(formData);
  });
}

// * Validator : Check Input
function validator(userData) {
  const error = {
    name: "",
    email: "",
    password: "",
  };
  const { name, email, password } = userData;

  // Rule : Name Field
  if (!name.trim()) {
    error.name = "Name is required!!";
  }
  // Rule : Name Field
  if (!email.trim()) {
    error.email = "Email is required!!";
  }
  // Rule : Name Field
  if (!password.trim()) {
    error.password = "Password is required!!";
  }

  // Display Errors
  document.querySelector("#nameError").textContent = error.name;
  document.querySelector("#passwordError").textContent = error.password;
  document.querySelector("#emailError").textContent = error.email;

  console.log(error);
}

// Form + validator
SignUpform.addEventListener("submit", validator);
