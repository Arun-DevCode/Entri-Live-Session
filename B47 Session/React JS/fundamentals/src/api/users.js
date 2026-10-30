const fetch_URL = "https://jsonplaceholder.typicode.com/users";

export async function fetchUsers() {
  const res = await fetch(fetch_URL);
  const data = await res.json();
  console.log(data);
  return data;
}

export async function formSubmission(data) {
  const form = await data.request.formData();
  console.log(data.request.params);
  console.log({ message: form.get("feedback"), rating: form.get("rating") });
}
