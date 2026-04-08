console.log(document.getElementById("title"));
// console.log(document.getElementsByClassName("heading"));

const headingTags = document.getElementsByClassName("heading"); // [{..},{..}..etc]

// console.log("Heading :", headingTags);

for (let Element of headingTags) {
  console.log(Element);
}

// Tag Selector
const inputTagOrElement = document.getElementsByTagName("input");

console.log("HTML Input Tag : ", inputTagOrElement);

for (let Element of inputTagOrElement) {
  console.log("Input Type : ", Element.type);
  console.log("Input Value : ", Element.value);
}

// Query Selector
const divTagOrElement = document.querySelector("#selector");
console.log(divTagOrElement);

// Query All Selector - it return all matched elements by selector
const container = document.querySelectorAll("#selector")
console.log(container);