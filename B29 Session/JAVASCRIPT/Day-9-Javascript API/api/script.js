console.log("Biscuit");
console.log("Milk");

// Fetch API
const config = {
  method: "POST", // store
  headers: {
    "content-type": "application/text,html,json..etc",
  },
  body: "",
};

const response = fetch("https://fakestoreapi.com/products"); // GET

// Response convert into json -> Object
// Accessing Object
// Error handling : catch
response
  .then((serverRes) => serverRes.json())
  .then((res) => {
    const products = res;
    display(products);
  })
  .catch(() => {
    console.log("Failed to fetch products!");
  });
// console.log(); // time taken
const container = document.querySelector("div");

// render : map
function display(data) {
  // check
  if (!data) {
    console.log("No dat found!");
  }

  data.map((product, index) => {
    container.innerHTML = `
        <p>${product.title}</p>
      `;
  });
}
