const nameInput = document.querySelector("input");
const emailInput = document.querySelector("#email");

// Value collect
let username = "";
let email = "";

// Name field
nameInput.addEventListener("change", (e) => {
  username += e.target.value;
});

//Email Field
emailInput.addEventListener("change", (e) => {
  email += e.target.value;
});

// Form validation
const formContainer = document.querySelector("form");

formContainer.addEventListener("submit", (e) => {
  //load stop
  e.preventDefault();

  //Name validation - Required (Field validation)
  console.log(username);
  if (username.trim() === "") {
    alert("Name is required!");
  }

  nameInput.value = "";
  return;
});
