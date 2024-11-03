// src/components/general/SearchBar.js
import React from "react";
import "./general.css";

export default function SearchBar({ title, setTitle }) {
  // Fonction pour gérer les changements d'entrée
  const handleInput = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={title}
        onChange={handleInput}
        placeholder="Rechercher..."
        className="search-input"
      />
    </div>
  );
}
