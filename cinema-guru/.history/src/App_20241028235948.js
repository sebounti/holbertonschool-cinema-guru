import React, { useState, useEffect } from "react";
import Dashboard from "./routes/dashboard/dashboard"; // Import du composant Dashboard
import Authentication from "./routes/auth/Authentication"; // Import du composant Authentication

export default function App() {
  // États du composant
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

  // Fonction exécutée lors du montage du composant
  useEffect(() => {
    // Récupérer le token d'accès depuis le localStorage
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      // Envoi de la requête de vérification d'authentification
      fetch("/api/auth/", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            // Vérifier si l'authentification a réussi
            setIsLoggedIn(true);
            setUserUsername(data.username); // Définir le nom d'utilisateur à partir de la réponse
          }
        })
        .catch((error) => {
          console.error("Erreur d'authentification:", error);
          setIsLoggedIn(false); // Réinitialise l'état si la requête échoue
        });
    }
  }, []);

  // Rendu conditionnel selon l'état de connexion
  return isLoggedIn ? (
    <Dashboard username={userUsername} />
  ) : (
    <Authentication />
  );
}
