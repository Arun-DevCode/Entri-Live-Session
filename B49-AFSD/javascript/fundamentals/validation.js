// const fields = document.querySelectorAll("input");

// // Event : Change or Input
// const phone = fields[0];
// const username = fields[1];
// const email = fields[2];

// const formData = {
//   name: "",
//   email: "",
//   phone: "",
// };

// phone.addEventListener("change", (event) => {
//   formData.phone = event.target.value;
// });

// email.addEventListener("change", (event) => {
//   formData.email = event.target.value;
// });

// username.addEventListener("change", (event) => {
//   formData.name = event.target.value;
// });

// // Form : Submit Event
// const form = document.querySelector("form");

// // Element : Error Display
// const errorDisplay = document.querySelector("#error_display");

// form.addEventListener("submit", (event) => {
//   // Fields Validation
//   const errors = {};
//   const errorText = document.createElement("p");
//   errorDisplay.appendChild(errorText);

//   /*
//      Phone: 
//        * required
//        * max length 10
//        ! Error : 
//            ! - Phone is required
//            ! - Please provide valid phone number
//    */
//   const phone = formData.phone;
//   const isPhoneError = phoneNumberValidator(phone);
//   console.log(isPhoneError);
//   errors.phone = isPhoneError;
//   errorText.textContent = errors.phone;
//   errorText.style.color = "red";

//   console.log(errors);
// });

// function phoneNumberValidator(phone) {
//   let phoneError = "";

//   if (!phone) {
//     phoneError = "Phone is required!";
//     return phoneError;
//   } else if (phone.length != 10) {
//     return (phoneError = "Please provide correct phone number!");
//   }
// }