import './dashboard.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from '../../components/movies/Filter';
import Movies from '../../components/movies/Movies';
import Button from '../../components/general/Button';
import debounce from 'lodash/debounce';

const HomePage = () => {
	const [movies, setMovies] = useState([])
	const [favorites, setFavorites] = useState([]);
    const [watchLater, setWatchLater] = useState([]);
	const [minYear, setMinYear] = useState(1970)
	const [maxYear, setMaxYear] = useState(2022)
	const [genres, setGenres] = useState([])
	const [sort, setSort] = useState("")
	const [title, setTitle] = useState("")
	const [page, setPage] = useState(1)
	const loadMovies = (page) => {
		const accessToken = localStorage.getItem('accessToken')
		const parameters = {
			minYear,
			maxYear,
			genres: genres.join(","),
			title,
			sort
		}
		const options = {
			method: 'GET',
			url: 'http://localhost:8000/api/titles/advancedsearch',
			params: { page: page, ...parameters },
			headers: {
				'authorization': `Bearer ${accessToken}`
			}
		};
		axios.request(options).then((response) => {
			setMovies(response.data.titles)
			setFavorites(response.data.favorites.map(fav => fav.TitleId))
			setWatchLater(response.data.watchLater.map(watch => watch.TitleId))
		}).catch((error) => {
			console.error(error);
		})
	}
	const debouncedLoadData = (debounce(loadMovies, 1000))
	useEffect(() => {
		debouncedLoadData(page)
	}, [minYear, maxYear, sort, genres, page, title]);
	return (
		<div className="home-page">
			<Filter title={title} setTitle={setTitle} movies={movies} setMovies={setMovies} minYear={minYear} setMinYear={setMinYear} maxYear={maxYear} setMaxYear={setMaxYear} sort={sort} setSort={setSort} genres={genres} setGenres={setGenres} />
			<Movies movies={movies} favorites={favorites} watchLater={watchLater} setFavorites={setFavorites} setWatchLater={setWatchLater} />
			<Button label="Load more" className="load-more" onClick={() => setPage(page + 1)} />
		</div>
	);
}

export default HomePage;
