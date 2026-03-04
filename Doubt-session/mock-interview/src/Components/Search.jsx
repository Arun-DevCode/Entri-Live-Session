import React, { useState } from "react";

function Search() {
  const [searchText, setSearchText] = useState("");

  // Get value from Input
  const handleChange = (e) => {
    const searchKey = e.target.value;
    setSearchText(searchKey);
  };

  const content = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        laudantium libero quam animi ab veniam quia expedita reprehenderit
        optio! Nostrum odit eligendi officia adipisci est ad temporibus dolor,
        maxime minima!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iure
        voluptatibus culpa similique eius fugiat veniam nostrum provident,
        libero dignissimos tempora consequatur necessitatibus illum nulla
        aspernatur iusto enim reprehenderit earum.`;

  const MarkerText = (para, query) => {
    if (!query) {
      return para;
    }

    // Finding Search key/character - global , case sensitive
    const pattern = new RegExp(`(${query})`, "gi");

    // Spliting into word
    const words = content.split(" ");

    //finding match word
    const result = words.map((word, index) => {
      return word.toLocaleLowerCase() === query?.toLocaleLowerCase() ? (
        <mark key={index}>{word}</mark>
      ) : (
        para
      );
    });
    console.log(result);

    return result;
  };
  return (
    <div className="m-16">
      <h1>Full Text Search - Feature</h1>
      <input
        type="text"
        placeholder="Search.."
        className="border px-5 py-2.5 border-gray-200 my-6"
        onChange={handleChange}
      />
      {/* Find & Highlight - Full Text */}
      <p>{MarkerText(content, searchText)}</p>
    </div>
  );
}

export default Search;
