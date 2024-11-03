import axios from 'axios';
import { useEffect, useState } from 'react';
import './dashboard.css';
import Movies from '../../components/movies/Movies';

const Favorites = () => {
	const [movies, setMovies] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [watchLater, setWatchLater] = useState([]);
	useEffect(() => {
		const accessToken = localStorage.getItem('accessToken')
		axios.get('http://localhost:8000/api/titles/favorite/', {
			headers: {
				authorization: `Bearer ${accessToken}`
			}
		}).then(response => {
			setMovies(response.data)
		})
	}, []);
	return (
		<div className="personal-moovies">
			<h1>Movies you like</h1>
			<Movies movies={movies} favorites={favorites} watchLater={watchLater} setFavorites={setFavorites} setWatchLater={setWatchLater} />
		</div>
	);
}

export default Favorites;
