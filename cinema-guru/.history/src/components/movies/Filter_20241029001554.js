// src/components/movies/Filter.js
import React from 'react';
import SearchBar from '../general/SearchBar';
import SelectInput from '../general/SelectInput';
import Tag from './Tag';
import './movies.css';

export default function Filter({
  minYear,
  setMinYear,
  maxYear,
  setMaxYear,
  sort,
  setSort,
  genres,
  setGenres,
  title,
  setTitle,
}) {
  // Options de tri
  const sortOptions = [
    { value: 'latest', label: 'Latest' },
    { value: 'oldest', label: 'Oldest' },
    { value: 'highestrated', label: 'Highest Rated' },
    { value: 'lowestrated', label: 'Lowest Rated' },
  ];

  // Liste des genres pour les tags
  const genreList = [
    'action', 'drama', 'comedy', 'biography', 'romance', 'thriller',
    'war', 'history', 'sport', 'sci-fi', 'documentary', 'crime', 'fantasy',
  ];

  return (
    <div className="filter-container">
      {/* Barre de recherche pour le titre */}
      <SearchBar title={title} setTitle={setTitle} />

      {/* Inputs pour l'année minimum et maximum */}
      <div className="year-inputs">
        <label>
          Min Year:
          <input
            type="number"
            value={minYear}
            onChange={(e) => setMinYear(Number(e.target.value))}
            placeholder="Min Year"
          />
        </label>
        <label>
          Max Year:
          <input
            type="number"
            value={maxYear}
            onChange={(e) => setMaxYear(Number(e.target.value))}
            placeholder="Max Year"
          />
        </label>
      </div>

      {/* Sélecteur pour trier les films */}
      <SelectInput
        label="Sort By"
        options={sortOptions}
        value={sort}
        setValue={setSort}
      />

      {/* Liste des tags de genres */}
      <ul className="genre-tags">
        {genreList.map((genre) => (
          <Tag
            key={genre}
            genre={genre}
            filter={true}
            genres={genres}
            setGenres={setGenres}
          />
        ))}
      </ul>
    </div>
  );
}
