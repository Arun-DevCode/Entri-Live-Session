const API_URL =
  "https://api-mockforge.onrender.com/api/databases/6a1e65f00a4857aba4e4dfa9/resources/Products";

// Select Elements : From HTML
const productContainer = document.querySelector(".product-container");

//* Get : fetch all products
async function getAllProducts() {
  try {
    const res = await fetch(API_URL); // Fulfilled or Rejected -> JSON
    const data = await res.json(); // Converted : JSON -> Object

    // Error in async/await
    if (data.length === 0) {
      throw new Error("No Data Found!");
    }
    return { error: false, message: "Fetch Success..", data };
  } catch (error) {
    console.log(error);
    return { error: true, message: error.message };
  }
}

async function displayProducts() {
  try {
    const { error, data, message } = await getAllProducts();
    if (error) {
      throw new Error("Failed to fetch data!");
    }

    // Loop : inset data into innerHTML
    data.map((product) => {
      productContainer.innerHTML = `<div class="product-card">
  
  <div class="product-details">
    <div class="product-header">
      <h2 class="product-title">${product.title}</h2>
      <span class="product-rating">★ ${product.user_rating}</span>
    </div>
    
    <p class="product-description">
      ${product.description}
    </p>
    
    <div class="product-footer">
      <span class="product-price">$${product.price}</span>
      <button class="action-btn">View Details</button>
    </div>

    <div>
     <button onclick=updateProduct()>Edit</button>
     <button onclick=removeProduct("${product.id}")>Delete</button>
    </div>
  </div>
</div>`;
    });
  } catch (error) {
    console.error(error.message);
  }
}

displayProducts();

async function updateProduct(id) {
  //   console.log(id);
  //   console.log("Button Clicked!");

  try {
    const res = await fetch(
      `https://6a1e797db79eec0d6cef4d34.mockapi.io/contacts`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          Name: "Varun",
          Phone_number: 1234567890,
          Email: "varun@gmail.com",
        }),
      },
    );
  } catch (error) {}
}
