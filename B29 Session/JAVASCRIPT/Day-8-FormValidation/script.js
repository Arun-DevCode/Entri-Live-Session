const form = document.querySelector("form");
const phone = document.querySelector("input");

let phoneNumber = ""; // in-memory

//collect input
phone.addEventListener("input", (e) => {
  console.log("Number:" + e.target.value);
  phoneNumber += e.target.value; // value update
});

// Error UI
const inputContainer = document.querySelector("div");

// Form event attached
form.addEventListener("submit", (event) => {
  // prevent load
  event.preventDefault();

  // Error UI Handling
  const errorElement = document.createElement("p");
  // Error Element Style
  errorElement.style.color = "red";
  inputContainer.appendChild(errorElement);

  // Validation process
  const isValidPhoneNumber = phoneNumber.length == 10; // true or false
  console.log(isValidPhoneNumber);

  if (!isValidPhoneNumber) {
    errorElement.textContent = "Please provide valid phone number!";
    return;
  }
  console.log("Phone Number:" + phoneNumber);
});
