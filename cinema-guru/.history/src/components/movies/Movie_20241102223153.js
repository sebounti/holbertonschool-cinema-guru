import './movies.css'
import MovieCard from './MovieCard'

const Movies = ({ movies, favorites, watchLater, setFavorites, setWatchLater }) => {
	return (
		<div>
			<ul className="movies">
				{movies &&
					movies.map((movie) =>
						<MovieCard
							key={movie.imdbId}
							movie={movie}
							favorites={favorites}
							watchLater={watchLater}
							setFavorites={setFavorites}
							setWatchLater={setWatchLater}
							isFavorite={favorites.includes(movie.id)}
							isWatchLater={watchLater.includes(movie.id)} />)}
			</ul>
		</div>
	);
}

export default Movies;
