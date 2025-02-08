import React from 'react';
import { useState } from 'react';
import apiService from '../services/apiService'; // Import des API-Service

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await apiService.login(username, password); // API-Anfrage an den Login-Endpunkt
      localStorage.setItem('token', data.token); // JWT im Local Storage speichern
      window.location.href = '/dashboard'; // Weiterleitung zum Dashboard
    } catch (error) {
      setError(error.response.data.error); // Fehler anzeigen
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Fehlermeldung */}
      <input
        type="text"
        placeholder="Benutzername"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Passwort"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Anmelden</button>
    </form>
  );
}

export default LoginForm;