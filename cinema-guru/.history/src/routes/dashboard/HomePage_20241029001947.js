import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./dashboard.css";
import MovieCard from "../../components/movies/MovieCard";
import Filter from "../../components/movies/Filter";
import Button from "../../components/general/Button";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState("");
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);

  // Fonction pour charger les films depuis l'API
  const loadMovies = useCallback(async (page) => {
    try {
      const response = await axios.get("/api/titles/advancedsearch", {
        params: {
          minYear,
          maxYear,
          genres: genres.join(","), // Convertir le tableau en chaîne pour l'URL
          title,
          sort,
          page,
        },
      });
      setMovies((prevMovies) => [...prevMovies, ...response.data]);
    } catch (error) {
      console.error("Erreur lors de la récupération des films:", error);
    }
  }, [minYear, maxYear, genres, sort, title]);

  // useEffect pour charger les films lors du premier montage et sur chaque changement de filtre/tri
  useEffect(() => {
    setMovies([]); // Réinitialise la liste des films lorsque les filtres changent
    loadMovies(1);
  }, [minYear, maxYear, genres, sort, title, loadMovies]);

  return (
    <div className="dashboard-homepage">
      <h1 className="page-title">Movies Dashboard</h1>

      {/* Composant de filtre */}
      <Filter
        minYear={minYear}
        setMinYear={setMinYear}
        maxYear={maxYear}
        setMaxYear={setMaxYear}
        sort={sort}
        setSort={setSort}
        genres={genres}
        setGenres={setGenres}
        title={title}
        setTitle={setTitle}
      />

      {/* liste des filmes */}
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </div>

      {/* Liste des films */}
      <Button
        label="Load More.."
        onClick={() => {
          const nextPage = page + 1;
          setPage(nextPage);
          loadMovies(nextPage);
        }}
      />
    </div>
  );
}
