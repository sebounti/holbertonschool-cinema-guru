import "./movies.css";
import unAvailable from "../../assets/unAvailable.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Tag from "./Tag";

const MovieCard = (movie) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);


  const addMovie = (type) => {
    const accessToken = localStorage.getItem("accessToken");
    axios
      .post(
        `http://localhost:8000/api/titles/${type}/${movie.imdbId}`,
        {},
        {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        },
      )
      .then((response) => {
        if (type === "favorite") setIsFavorite(!isFavorite);
        if (type === "watchLater") setIsWatchLater(!isWatchLater);
      });
  };



  const style = {
    backgroundImage: `url(${movie.imageurls[0]}), url(${unAvailable})`,
  };
  let synopsis = "- Not Available -";
  if (movie.synopsis) {
    synopsis =
      movie?.synopsis?.length > 100
        ? movie.synopsis.substring(0, 100) + ".."
        : movie.synopsis;
  }

  return (
    <li className="movie-card">
      <div style={style} alt="" className="movie-image">
        <span className="movie-actions">
          <FontAwesomeIcon
            icon={faClock}
            className={`icon ${isWatchLater ? "watch-later" : ""}`}
            onClick={() => addMovie("watchLater")}
          />
          <FontAwesomeIcon
            icon={faStar}
            className={`icon ${isFavorite ? "favorite" : ""}`}
            onClick={() => addMovie("favorite")}
          />
        </span>
        <h1>{movie.title}</h1>
      </div>
      <div>
        <p>{synopsis}</p>
        <ul>
          {movie.genres.map((genre, idx) => (
            <Tag key={`tag-${idx}`} genre={genre} />
          ))}
        </ul>
      </div>
    </li>
  );
};

export default MovieCard;
