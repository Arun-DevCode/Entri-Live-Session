const response = fetch("http://localhost:3000/register", {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({ name: "John", age: 20 }),
});
response
  .then(async (data) => await data.json())
  .then((data) => console.log("Api response :", data));

/*
  const request = {
   method : "POST",
   headers : {},
   body : {}
  }
*/
