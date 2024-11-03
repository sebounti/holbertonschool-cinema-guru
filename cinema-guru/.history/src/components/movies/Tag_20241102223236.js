import "./movies.css";
import { useState } from "react";

const Tag = ({ genre, filter, genres, setGenres }) => {
  const [selected, setSelected] = useState(false);
  function handleTag() {
    if (selected) {
      const newGenres = genres.filter(
        (selectedGenre) => selectedGenre !== genre.toLowerCase(),
      );
      setGenres(newGenres);
      setSelected(false);
    } else {
      const newGenres = [...genres];
      newGenres.push(genre.toLowerCase());
      setGenres(newGenres);
      setSelected(true);
    }
  }
  return (
    <li
      className={`genre-tag ${selected ? "active-tag" : ""}`}
      onClick={() => {
        if (filter) handleTag();
      }}
    >
      {genre}
    </li>
  );
};

export default Tag;
