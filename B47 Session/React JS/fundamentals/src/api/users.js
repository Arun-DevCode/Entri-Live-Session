const fetch_URL = "https://jsonplaceholder.typicode.com/users";

export async function fetchUsers() {
  const res = await fetch(fetch_URL);
  const data = await res.json();
  console.log(data);
  return data;
}
