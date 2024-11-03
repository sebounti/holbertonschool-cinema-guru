import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Authentication from './routes/auth/Authentication';
import Dashboard from './routes/dashboard/Dashboard'
import './App.css';

function App() {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    axios.post('http://localhost:8000/api/auth', {}, {
      headers: {
        authorization: `Bearer ${accessToken}`
      }
    }).then(response => {
      setUserUsername(response.data.username)
      setIsLoggedIn(true)
    })
  }, []);
  return (
    <div className="App">
      {IsLoggedIn ? <Dashboard userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} /> : (
        <Authentication IsLoggedIn={IsLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} />
      )}
    </div>
  );
}

export default App;
