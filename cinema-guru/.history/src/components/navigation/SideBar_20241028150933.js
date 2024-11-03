import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Activity from '../Activity'; // Assurez-vous que le chemin est correct
import './navigation.css'; // Importer le CSS de navigation

export default function SideBar() {
  const [selected, setSelected] = useState("home");
  const [small, setSmall] = useState(true); // État pour afficher ou masquer la sidebar
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false); // État pour afficher ou masquer les activités

  const navigate = useNavigate();

  const toggleSidebarSize = () => {
    setSmall(!small);
  };

  const toggleShowActivities = () => {
    setShowActivities(!showActivities);
  };

  const setPage = (pageName) => {
    setSelected(pageName);
    switch (pageName) {
      case "Home":
        navigate('/home');
        break;
      case "Favorites":
        navigate('/favorites');
        break;
      case "Watch Later":
        navigate('/watchlater');
        break;
      default:
        navigate('/home');
    }
  };

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get('/api/activity');
        setActivities(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des activités :", error);
      }
    };
    fetchActivities();
  }, []);

  return (
    <nav className={`sidebar ${small ? "small" : ""}`}>
      <button onClick={toggleSidebarSize}>
        {small ? "➡️ Agrandir" : "⬅️ Réduire"}
      </button>

      <ul className="nav-list">
        <li onClick={() => setPage("Home")} className={selected === "home" ? "active" : ""}>
          <span className="icon">🏠</span> Home
        </li>
        <li onClick={() => setPage("Favorites")} className={selected === "favorites" ? "active" : ""}>
          <span className="icon">⭐</span> Favorites
        </li>
        <li onClick={() => setPage("Watch Later")} className={selected === "watchlater" ? "active" : ""}>
          <span className="icon">⏰</span> Watch Later
        </li>
      </ul>

      <button onClick={toggleShowActivities}>
        {showActivities ? "Masquer les Activités" : "Afficher les Activités"}
      </button>

      {showActivities && (
        <ul className="activity-list">
          {activities.slice(0, 10).map((activity, index) => (
            <Activity key={index} activity={activity} />
          ))}
        </ul>
      )}
    </nav>
  );
}
