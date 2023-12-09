import React, { useState } from "./react";

export const Breeds = () => {
  const [breeds, setBreeds] = useState([], "breeds");
  const [fetchComplete, setFetchComplete] = useState(false, 'fetch');

    // Check if fetchComplete is false before performing the fetch
  if (!fetchComplete) {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then((data) => {
        setBreeds(Object.keys(data.message), Breeds);
        setFetchComplete(true, Breeds);
      });
  }
  
  
  return (
    <div>
      <h1>Good Bois 🐶</h1>
      <ul>
        {breeds.map((breed) => (
          <li key={breed}>
            <a href={`/breed?b=${breed}`}>{breed}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
