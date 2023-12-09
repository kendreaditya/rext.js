import React, { useState } from "./react";

export const Breed = (path) => {
  const [breed, setBreed] = useState("", "breed");
  const [image, setImage] = useState("", "image");
  const [loading, setLoading] = useState(false, "loading");

  if (!loading) {
    const params = new URLSearchParams(path);
    const b = params.get("b");

    if (b) {
      fetch(`https://dog.ceo/api/breed/${b}/images/random`)
      .then((response) => response.json())
        .then((data) => {
            setBreed(b, Breed);
            setImage(data.message, Breed);
            setLoading(true, Breed);
        });
    }

    return <div>Loading...</div>;
  } else {
  return (
    <div>
      <a href="/">Go Back</a>
      <h1>{breed}</h1>
      <img width="400" src={image} alt={breed} />
    </div>
  );
  }
};
