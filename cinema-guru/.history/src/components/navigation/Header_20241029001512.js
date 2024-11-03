import React from "react";
import "./navigation.css";

const Header = ({ userUsername, setIsLoggedIn }) => {
  // Fonction de déconnexion
  const logout = () => {
    // Suppression du token d'accès dans localStorage
    localStorage.removeItem("accessToken");
    // Met à jour l'état de connexion
    setIsLoggedIn(false);
  };

  return (
    <nav>
      {/* Image avatar aléatoire */}
      <img src="https://picsum.photos/100/100" alt="Avatar" />

      {/* Message de bienvenue pour l'utilisateur */}
      <p>Bienvenue, {userUsername}!</p>

      {/* Déconnexion */}
      <span onClick={logout} style={{ cursor: "pointer" }}>
        <i className="logout-icon"></i>{" "}
        {/* Ajoutez une icône ici si nécessaire */}
        Logout
      </span>
    </nav>
  );
};

export default Header;
