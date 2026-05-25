import React, { useState } from "react";

const URL = `https://api-mockforge.onrender.com/api/databases/6a13f403de7a32e4cba58997/resources/Posts`;

export default function PostPage() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [postId, setPostID] = useState("");

  const handleCreatePost = async () => {
    try {
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, desc }), // Passing the data to be created
      });

      // 1. Check if the HTTP status code is in the 200-299 range
      if (!res.ok) {
        // Try to get error details from the server response, fallback to status text
        const errorData = await res.json().catch(() => ({}));
        throw new Error(
          errorData.message || `Server responded with status: ${res.status}`,
        );
      }

      // 2. Parse the successful JSON response
      const data = await res.json();

      // 3. Handle success (e.g., update state, show success toast, redirect)
      console.log("Post created successfully:", data);
      return data;
    } catch (error) {
      // 4. Handle errors (both network errors and explicit server errors thrown above)
      console.error("Failed to create post:", error.message);
      // alert(`Error: ${error.message}`); // Or use a nice UI notification library
    }
  };

  const handlePostDelete = async () => {
    try {
      const res = await fetch(`${URL}/${postId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {}
  };
  const handleUpdate = async () => {
    try {
      const res = await fetch(`${URL}/${postId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, desc }),
      });
    } catch (error) {}
  };
  return (
    <div className="py-12">
      <h1 className="text-center text-3xl font-medium">
        Welcome to <span className="text-blue-500">Post Page</span>
      </h1>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-100">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Create New Entry
          </h2>
          <p className="text-sm text-gray-500">
            Please fill out the details below.
          </p>
        </div>
        <div className="space-y-5">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Enter a catchy title"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out text-gray-900 placeholder-gray-400"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              required
              rows={3}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Describe your entry here..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out text-gray-900 placeholder-gray-400"
              defaultValue={""}
            />
          </div>
          <div className="pt-2">
            <button
              type="button"
              onClick={handleCreatePost}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg shadow-sm hover:shadow transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="my-12">
        <input
          type="text"
          placeholder="enter post id"
          onChange={(e) => setPostID(e.target.value)}
        />
        <input
          type="text"
          placeholder="enter post title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="enter post desc"
          onChange={(e) => setDesc(e.target.value)}
        />

        <button onClick={handleUpdate}>Delete post</button>
      </div>
    </div>
  );
}
