// src/components/movies/Tag.js
import React, { useState } from "react";
import "./movies.css";

export default function Tag({ genre, filter, genres, setGenres }) {
  // État pour suivre si le tag est sélectionné ou non
  const [selected, setSelected] = useState(false);

  // Fonction pour gérer la sélection du tag
  const handleTag = () => {
    if (selected) {
      // Retire le genre de la liste si sélectionné
      setGenres(genres.filter((g) => g !== genre));
    } else {
      // Ajoute le genre à la liste s'il n'est pas sélectionné
      setGenres([...genres, genre]);
    }
    // Inverse l'état de sélection
    setSelected(!selected);
  };

  return (
    <li
      className={`tag ${selected ? "selected" : ""} ${filter ? "filter" : ""}`}
      onClick={handleTag}
    >
      {genre}
    </li>
  );
}
