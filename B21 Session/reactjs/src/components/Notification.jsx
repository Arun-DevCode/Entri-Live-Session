import React from "react";
import { Toaster } from "react-hot-toast";
import useNotification from "../utils/notification";
import useTheme from "../utils/theme";

export default function Notification() {
  const { theme, toggleTheme } = useTheme();

  async function getPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) throw new Error("Failed to fetch posts");
    const data = await res.json();
    return data;
  }

  const notify = async () => {
    await useNotification(getPosts);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground transition-colors duration-300">
      <div className="space-y-4">
        <button
          onClick={notify}
          className="bg-blue-500 dark:bg-black text-white px-6 py-2 rounded-xl font-medium shadow-md hover:opacity-90 transition"
        >
          Register
        </button>

        <button
          onClick={toggleTheme}
          className="bg-foreground text-background px-6 py-2 rounded-xl font-medium shadow-sm transition"
        >
          Toggle {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      <Toaster position="top-center" />
    </div>
  );
}
