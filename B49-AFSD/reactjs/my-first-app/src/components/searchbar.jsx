import { useState } from "react";
import SearchHistory from "./SearchHistory";

export default function Searchbar() {
  const [keyword, setKeyword] = useState(null);
  console.log(keyword);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search for ebook , products etc"
      />
      {/* Search History */}
      <SearchHistory data={keyword} />
    </div>
  );
}
