import React, { useState, useEffect } from "react";
import axios from "axios";
import "./dashboard.css";
import MovieCard from "../../components/movies/MovieCard";

export default function Favorites() {
  const [movies, setMovies] = useState([]);

  // Utilisation de useEffect pour récupérer les films favoris au montage du composant
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get("/api/titles/favorite/");
        setMovies(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des films favoris :",
          error,
        );
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div className="dashboard-favorites">
      <h1 className="page-title">Movies you like</h1>

      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </div>
    </div>
  );
}
