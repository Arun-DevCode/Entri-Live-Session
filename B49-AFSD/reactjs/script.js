let loadCount = 1;
window.addEventListener("load", () => {
  console.log("Page Refreshed:", loadCount);
  loadCount++;
});

const h1 = document.querySelector("h1");
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  h1.textContent = 1;
});
