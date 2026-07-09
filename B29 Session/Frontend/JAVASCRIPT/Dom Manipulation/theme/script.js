// console.log("Script Connected!");

// // CreateElement
// const h1Tag = document.createElement("h1");
// const tableHeading = document.createElement("h1");
// const cardHeading = document.createElement("h1");
// const h2Tag = document.createElement("h2");

// // content
// h1Tag.textContent = "Welcome to Remove";
// console.log(h1Tag);

// // Add or include as child to body
// const body = document.querySelector("body");
// console.log(body);

// // appendChild - camel case
// body.appendChild(h1Tag);
// // body.appendChild(tableHeading);
// // body.appendChild(cardHeading);
// // body.prepend(h2Tag);

// // Removing Element - Specifically
// // body.removeChild(h2Tag)
// tableHeading.remove();

// // Style Manipulation
// // color
// h1Tag.style.color = "blue";
// // font size / weight
// h1Tag.style.fontSize = "34px";

// // style Reusability
// const styles = getComputedStyle(h1Tag);
// console.log(styles.color);

// // Custom Style
// const buttonStyles = {
//   backgroundColor: "black",
//   color: "white",
//   paddingInline: "12px",
//   paddingBlock:"8px"
// };

// const buttonTag = document.createElement("button");
// buttonTag.textContent = "Click me";

// // Apply - custom style
// // for(..in) - property = backgroundColor
// for (let property in buttonStyles) {
//   buttonTag.style[property] = buttonStyles[property];// values
// }

// // Append element to body
// body.appendChild(buttonTag);

// traversing - DOM
const body = document.querySelector("body");
const h1Tag = document.querySelector("h1");

// Parent Element - Traversing level 1
// console.log(body.parentElement);
// console.log(body.parentNode);

// Child
console.log(body.children);
console.log(body.childNodes);

// Fist & last element

// Element wise
console.log(body.firstElementChild);
console.log(body.lastElementChild);

// Nodes wise
// console.log(body.firstChild)
// console.log(body.lastChild)

// closest method
// const closestElement = document.querySelector("head").closest("body");
// console.log(closestElement);
