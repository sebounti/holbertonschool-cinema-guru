import React from "react";
import "./auth.css";
import Input from "../../components/general/Input";
import Button from "../../components/general/Button";

export default function Login({
  username,
  password,
  setUsername,
  setPassword,
}) {
  // Gestionnaire pour soumettre le formulaire de connexion
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique de connexion, par exemple en appelant une API pour authentifier l'utilisateur
    console.log("Login attempt with:", { username, password });
  };

  return (
    <div className="login-container">
      <h2>Create a new account</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-group">
          <Input
            label="Username :"
            type="text"
            value={username}
            setValue={setUsername}
            className="input"
          />
        </div>
        <div className="input-group">
          <Input
            label="Password :"
            type="password"
            value={password}
            setValue={setPassword}
            className="input"
          />
        </div>
      </form>
    </div>
  );
}
