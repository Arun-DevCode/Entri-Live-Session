// const card = document.querySelector("div");

// // innerHTML - Render HTML Code
// card.innerHTML = `
// <button id="action">Pay Now</button>
// <button>Click me</button>
// <h1>Welcome to DOM Manipulation</h1>
// `;

// Attribute Manipulation

// // After button available
// const button = document.querySelector("button");
// console.log(button.getAttribute("id"));
// console.log(button.setAttribute("class", "trigger"));

// // button - id , class
// console.log(button.removeAttribute("id"));
// console.log(
//   button.hasAttribute("id") ? "Id Attribute Removed" : "Id can't remove",
// );

// Dark Theme Feature
const body = document.querySelector("body");
const pTag = document.querySelector("p");

// set attribute
body.setAttribute("class", "");

// change them
const isDarkTheme = true;
const darkOrLight = isDarkTheme ? "dark" : "light";

pTag.textContent = darkOrLight;
body.classList.toggle(darkOrLight);

// contains
console.log(body.classList.contains("dark"));

// if (!isDarkTheme) {
//   body.classList.add("light");
//   body.classList.remove("dark");
//   // modern way
//   body.classList.toggle("dark");
// } else {
//   body.classList.add("dark");
//   body.classList.remove("light");
// }
