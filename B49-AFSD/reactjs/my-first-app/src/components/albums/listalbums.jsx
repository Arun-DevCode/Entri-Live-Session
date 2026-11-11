import React from "react";

export default function Listalbums({ gallary }) {
  console.log(gallary);
  // Check photos
  if (gallary.length === 0) {
    return <h1>No Albums Photos Found</h1>;
  }
  return (
    <>
      {gallary.map((photo) => {
        return (
          <div>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        );
      })}
    </>
  );
}
