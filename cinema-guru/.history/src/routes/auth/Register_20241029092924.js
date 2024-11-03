import React from 'react';
import './auth.css';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';

export default function Register({ username, password, setUsername, setPassword }) {
  // Gestionnaire pour soumettre le formulaire d'inscription
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique d'inscription, par exemple en appelant une API pour créer un nouvel utilisateur
    console.log("Registration attempt with:", { username, password });
  };

  return (
    <div className="register-container">
      <h2>Create a new account</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="input-group">
          <Input
            label="Username"
            type="text"
            value={username}
            setValue={setUsername}
            className="input"
          />
        </div>
        <div className="input-group">
          <Input
            label="Password"
            type="password"
            value={password}
            setValue={setPassword}
            className="input"
          />
        </div>
        <Button label="Submit" onClick={handleSubmit} className="submit-button" />
      </form>
    </div>
  );
}
