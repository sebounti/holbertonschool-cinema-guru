import './navigation.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faClock, faFolder, faStar } from '@fortawesome/free-solid-svg-icons';
import Activity from '../Activity';


const SideBar = () => {
	const [selected, setSelected] = useState("home")
	const [small, setSmall] = useState(true)
	const [activities, setActivities] = useState([])
	const [showActivities, setShowActivities] = useState(false)
	const navigate = useNavigate()
	function setPage(pageName) {
		setSelected(pageName)
		navigate(pageName)
	}
	useEffect(() => {
		const accessToken = localStorage.getItem('accessToken')
		axios.get("https://localhost:8000/api/activity", {
			headers: {
				authorization: `Bearer ${accessToken}`
			}
		}).then(response => setActivities(response.data))
	}, []);
	return (
		<div className='sidebar'>
			<ul>
				<li className={selected === 'home' ? 'active-item' : 'sidebar-item'} onClick={() => setPage("home")}>
					<FontAwesomeIcon icon={faFolder} className="mainIcon" />
					<h2>Home</h2>
					<FontAwesomeIcon icon={faArrowRight} className="arrowIcon" />
				</li>
				<li className={selected === 'favorites' ? 'active-item' : 'sidebar-item'} onClick={() => setPage("favorites")}>
					<FontAwesomeIcon icon={faStar} className="mainIcon" />
					<h2>Favorites</h2>
					<FontAwesomeIcon icon={faArrowRight} className="arrowIcon" />
				</li>
				<li className={selected === 'watchlater' ? 'active-item' : 'sidebar-item'} onClick={() => setPage("watchlater")}>
					<FontAwesomeIcon icon={faClock} className="mainIcon" />
					<h2>Watch Later</h2>
					<FontAwesomeIcon icon={faArrowRight} className="arrowIcon" />
				</li>
			</ul>
			<div className='activities'>
				<h1>Latest Activities</h1>
				{activities.map(activity => (
					<Activity key={activity.id} username={activity.username} title={activity.title} date={activity.date}
					/>
				))}
			</div>
		</div>
	)
}

export default SideBar;
