// Selecting elements
const fields = document.querySelectorAll("input");
const form = document.querySelector("form");
const blogList = document.querySelector("#blog-List");

// Element Creation

// API : Blog API Creation
const API_URL = "https://6a8db861baf2ac84246d632e.mockapi.io/blogs";

// * Create : Blog Create
async function createBlog(blogs) {
  try {
    // API Error : handling
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blogs),
    });

    if (!res.ok) {
      throw new Error("Failed to create a blog! Try again later");
    }

    // Res : Validation
    const data = await res.json();

    if (!data || Object.keys(data).length === 0) {
      throw new Error("Failed to create!");
    }

    alert("Blog Created Success..");

    return data;
  } catch (error) {
    return alert(error.message);
  }
}

// * Get : Retrieve Blog Data
async function GetAllBlogs() {
  try {
    // API Error : handling
    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error("Failed to Get all blogs! Try again later");
    }

    // Res : Validation
    const data = await res.json();

    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("No Blog Created Yet!");
    }

    displayBlogs(data);
  } catch (error) {
    return alert(error.message);
  }
}

// * Display : Render all the blogs
function displayBlogs(data) {
  if (data.length === 0) {
    return;
  }

  blogList.innerHTML = "";

  // Blog Card
  for (const blog of data) {
    const blogCard = document.createElement("div");

    const title = document.createElement("h3");
    const desc = document.createElement("p");
    const author = document.createElement("h5");

    // fields : Value update
    title.textContent = blog.title;
    desc.textContent = blog.desc;
    author.textContent = blog.author;

    // Append fields into blog card
    blogCard.appendChild(title);
    blogCard.appendChild(desc);
    blogCard.appendChild(author);

    // Append blog card to blog list
    blogList.appendChild(blogCard);
  }
}

// Form submission
form.addEventListener("submit", async (event) => {
  // Stop load
  event.preventDefault();

  //Store fields value
  const blogData = {
    title: "",
    desc: "",
    author: "",
  };

  // get value from inputs
  console.log("Before : ", blogData);

  for (const input of fields) {
    const fieldName = input.name;
    const fieldValue = input.value;

    blogData[fieldName] = fieldValue;
    console.log("After : ", blogData);
  }

  // API : To store blog data into DB
  await createBlog(blogData);

  // Get All Blogs
  await GetAllBlogs();

  form.reset();
});

// Get All Blogs
GetAllBlogs();
