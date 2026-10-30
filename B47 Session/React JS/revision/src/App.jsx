import React, { useEffect, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [keyword, setKeyword] = useState("");

  // API: Get Users Data with Debounce
  useEffect(() => {
    const timer = setTimeout(async () => {
      const res = await fetch(URL);
      const users = await res.json();

      console.table(users);
    }, 5000);

    // Cleanup: Clear the previous timer
    return () => {
      clearTimeout(timer);
    };
  }, [keyword]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <input
        type="text"
        className="border focus:outline-none border-gray/30 rounded px-3.5 py-2.5"
        placeholder="Search for videos"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
}

export default App;
