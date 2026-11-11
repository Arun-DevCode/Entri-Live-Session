import { useState } from "react";
import { useLoaderData, Form } from "react-router";

export default function AlbumsPage() {
  // const photos = useLoaderData();
  // console.table(photos);

  return (
    <>
      <h1>Welcome to Album Page</h1>
      <Form method="DELETE">
        <div>
          <input
            type="text"
            placeholder="Enter your album title"
            name="title"
            required
          />
        </div>

        <button type="submit">Create Album</button>
      </Form>
    </>
  );
}
