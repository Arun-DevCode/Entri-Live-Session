// Async & Await
const USER_URL = "https://jsonplaceholder.typicode.com/users";

// POST
const POST_URL = "https://jsonplaceholder.typicode.com/posts";

async function getData(URL) {
  const result = await fetch(URL);
  const data = await result.json();
  console.log(data);
  return result;
}

getData(USER_URL);
getData(POST_URL);

// Sync Execution - Async Task by Using Promise methods (then , catch , finally)
// response
//   .then((jsonData) => jsonData.json())
//   .then((promiseObject) => console.log(promiseObject)); // Object
