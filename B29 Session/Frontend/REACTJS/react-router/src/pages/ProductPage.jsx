import React from "react";
import {
  Outlet,
  useLoaderData,
  Form,
  redirect,
  useSearchParams,
} from "react-router";

export default function ProductPage() {
  // const products = useLoaderData();

  const [productParams, setProductParams] = useSearchParams();
  console.log("Search :", productParams.get("search"));
  console.log("category :", productParams.get("category"));
  console.log("brand :", productParams.get("brand"));

  // function updateSearchParams() {
  //   console.log("Button Clicked!");
  //   setProductParams((prev)=>{ ...prev, search: "iphone 17 prox max" });
  // }

  return (
    <div>
      <h1>Welcome to Product Page</h1>
      <Form method="GET">
        <div>
          <input type="text" placeholder="Enter your name" name="search" />
        </div>
        <button type="submit">Submit</button>
      </Form>
      <button onClick={updateSearchParams}>Update</button>
      <Outlet />
    </div>
  );
}
