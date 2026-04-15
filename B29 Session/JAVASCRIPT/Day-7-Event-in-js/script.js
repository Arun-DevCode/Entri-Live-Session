const btn = document.querySelector("button");
const inputTag = document.querySelector("input");

// // Action : callback
// function print() {
//   console.log("Button Clicked!");
// }

// // event listener
// btn.addEventListener("click", print, {
//   capture: true,
//   once: true,
//   passive: true,
// });

// Mouse Event
// btn.addEventListener("click", () => console.log("Button Click"));

// btn.addEventListener("dblclick", () => console.log("Button Click"));

// btn.addEventListener("mouseover", () => {
//   btn.style.backgroundColor = "blue";
// });
// btn.addEventListener("mouseout", () => {
//   btn.style.backgroundColor = "red";
//   console.log("Mouse out!");
// });

// Keyboard Event
// btn.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     console.log("Button Clicked!");
//   }
// });

// Form Events
// const form = document.querySelector("form");

// let username = "";

// inputTag.addEventListener("change", (event) => {
//   console.log("EVENT", event.target.value);
//   console.log("Input clicked");
// });

// form.addEventListener("submit", () => {
//   console.log("Form Submitted!");
// });

// btn.addEventListener("click", () => {
//   console.log("Button Clicked!");
//   window.addEventListener("load", () => {
//     console.log("Window is refresh/reloaded!");
//   });
// });

// window.addEventListener("load", () => {
//   console.log("Window is refresh/reloaded!");
// });

// window.addEventListener("resize", () => {
//   console.log("Window is refresh/reloaded!");
//   //   console.log("Window Height:" + window.innerHeight);
//   console.log("Window Width:" + window.innerWidth);
// });

// window.addEventListener("scroll", () => {
//   console.log("Window is scroll!");
//   //   console.log("Window Height:" + window.innerHeight);
//   console.log(window.scrollY);
//   //   console.log("Window Width:" + window.scrollX);
//   if (window.scrollY >= 500) {
//     document.querySelector("body").style.backgroundColor = "black";
//     document.querySelector("body").style.color = "white";
//   }
// });



// Event flow - capturing / target / bubbling

const outerDiv = document.querySelector("div");
      const innerButton = document.querySelector("button");

      // innerButton.addEventListener("click", (event) => {
      //   event.stopPropagation();
      // });

      // outerDiv.addEventListener(
      //   "click",
      //   (event) => {
      //     event.stopPropagation();
      //   },
      //   {
      //     capture: true,
      //   },
      // );

      // innerButton.addEventListener("click", (event) => {
      //   console.log(event.target);
      //   console.log(event.currentTarget);
      // });