import React from 'react';
import './navigation.css'; // Assurez-vous que le fichier CSS est bien configuré pour styliser le composant
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default function Header({ userUsername, setIsLoggedIn }) {
  // Fonction de déconnexion
  const logout = () => {
    localStorage.removeItem('accessToken'); // Supprime le token du localStorage
    setIsLoggedIn(false); // Met à jour l'état pour indiquer que l'utilisateur est déconnecté
  };

  return (
    <nav className="header-nav">
      {/* Image aléatoire d'avatar */}
      <img src="https://picsum.photos/100/100" alt="User Avatar" className="avatar-img" />

      {/* Message de bienvenue */}
      <p className="welcome-text">Bienvenue, {userUsername} !</p>

      {/* Bouton de déconnexion */}
      <span className="logout" onClick={logout}>
        <FontAwesomeIcon icon={faSignOutAlt} className="logout-icon" /> Déconnexion
      </span>
    </nav>
  );
}
