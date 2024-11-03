import React, { useState } from 'react';
import './auth.css';
import axios from 'axios';
import Login from './login';
import Register from './Register';
import Button from '../../components/general/Button';

export default function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, setSwitch] = useState(true); // True pour Login, false pour Register
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Fonction handleSubmit pour gérer l'envoi du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    try {
      const endpoint = _switch ? '/api/auth/login' : '/api/auth/register';
      const response = await axios.post(endpoint, {
        username,
        password,
      });

      // Si la requête est un succès
      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem('accessToken', token); // Stocke le token JWT
        setUserUsername(username); // Met à jour le nom d'utilisateur dans l'état
        setIsLoggedIn(true); // Passe l'état de connexion à vrai
      }
    } catch (error) {
      console.error('Erreur lors de la requête:', error);
      alert('Erreur lors de la connexion ou de l\'inscription');
    }
  };

  return (
    <div className="authentication-container">
      <div className="auth-toggle">
        <Button
          label="Sign In"
          onClick={() => setSwitch(true)}
          className={`toggle-button ${_switch ? 'active' : ''}`}
        />
        <Button
          label="Sign Up"
          onClick={() => setSwitch(false)}
          className={`toggle-button ${!_switch ? 'active' : ''}`}
        />
      </div>

      <form onSubmit={handleSubmit} className="auth-form">
        {_switch ? (
          <Login
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        ) : (
          <Register
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        )}
        <Button label="Sign in"
                onClick={handleSubmit}
                // eslint-disable-next-line no-undef
                className={Button}
                icon={<i className="fa fa-sign-in"></i>} // Exemple avec une icône FontAwesome
                type="submit" />
      </form>
    </div>
  );
}
