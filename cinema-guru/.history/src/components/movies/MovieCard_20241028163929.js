// src/components/movies/MovieCard.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faClock } from "@fortawesome/free-solid-svg-icons";
import "./movies.css";

export default function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  // useEffect pour récupérer les favoris et les films "à regarder plus tard"
  useEffect(() => {
    const fetchUserLists = async () => {
      try {
        // Récupérer les favoris
        const favoriteResponse = await axios.get("/api/titles/favorite");
        const watchLaterResponse = await axios.get("/api/titles/watchlater");

        // Met à jour l'état selon si le film est dans les listes
        setIsFavorite(
          favoriteResponse.data.some((fav) => fav.imdbId === movie.imdbId),
        );
        setIsWatchLater(
          watchLaterResponse.data.some(
            (watch) => watch.imdbId === movie.imdbId,
          ),
        );
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des listes utilisateur:",
          error,
        );
      }
    };

    fetchUserLists();
  }, [movie.imdbId]);

  // Gestion du clic pour ajouter ou retirer un film des listes
  const handleClick = async (type) => {
    const route = `/api/titles/${type}/${movie.imdbId}`;
    const currentState = type === "favorite" ? isFavorite : isWatchLater;

    try {
      // Effectue une requête POST ou DELETE selon l'état actuel
      if (currentState) {
        await axios.delete(route);
      } else {
        await axios.post(route);
      }

      // Met à jour l'état après la requête
      if (type === "favorite") {
        setIsFavorite(!isFavorite);
      } else {
        setIsWatchLater(!isWatchLater);
      }
    } catch (error) {
      console.error(`Erreur lors de la mise à jour du film en ${type}:`, error);
    }
  };

  return (
    <li className="movie-card">
      <div className="movie-card-header">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-icons">
          {/* Icône pour ajouter aux favoris */}
          <FontAwesomeIcon
            icon={faHeart}
            onClick={() => handleClick("favorite")}
            className={`icon ${isFavorite ? "favorite" : ""}`}
            title={isFavorite ? "Remove from favorites" : "Add to favorites"}
          />
          {/* Icône pour ajouter à la liste "à regarder plus tard" */}
          <FontAwesomeIcon
            icon={faClock}
            onClick={() => handleClick("watchlater")}
            className={`icon ${isWatchLater ? "watch-later" : ""}`}
            title={
              isWatchLater ? "Remove from watch later" : "Add to watch later"
            }
          />
        </div>
      </div>
      <p className="movie-synopsis">{movie.synopsis}</p>
      <ul className="movie-genres">
        {movie.genres.map((genre, index) => (
          <li key={index} className="genre-tag">
            {genre}
          </li>
        ))}
      </ul>
    </li>
  );
}
