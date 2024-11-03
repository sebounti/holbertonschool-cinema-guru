import React from 'react';
import './dashboard.css'; // Assurez-vous que le fichier CSS existe pour styliser le composant
import Header from '../../components/navigation/Header'; // Import du composant Header
import  SideBar  from "../../components/navigation/SideBar"
import HomePage from '../../routes/dashboard/HomePage'; // Import the HomePage component
import Favorites from '../../routes/dashboard/Favorites'; // Import the Favorites component
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import WatchLater from '../../routes/dashboard/WatchLater'; // Import the WatchLater component

export default function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <BrowserRouter>
      <div className="dashboard-container">
      {/* Ajout du Header avec les props */}
        <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/watchlater" element={<WatchLater />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
        {/* Autres éléments du tableau de bord peuvent être ajoutés ici */}
        < SideBar />
      </div>
      </BrowserRouter>
  );
}
