import React, { useState, useEffect } from "react";
import axios from "axios";
import "./dashboard.css";
import MovieCard from "../../components/movies/MovieCard";

export default function WatchLater() {
  const [movies, setMovies] = useState([]);

  // Utilisation de useEffect pour récupérer les films à regarder plus tard au montage du composant
  useEffect(() => {
    const fetchWatchLaterMovies = async () => {
      try {
        const response = await axios.get("/api/titles/watchlater/");
        setMovies(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des films à regarder plus tard :",
          error,
        );
      }
    };

    fetchWatchLaterMovies();
  }, []);

  return (
    <div className="dashboard-watchlater">
      <h1 className="page-title">Movies to Watch Later</h1>

      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </div>
    </div>
  );
}
