import React from 'react';
import { useState } from 'react';
import apiService from '../services/apiService'; // Import des API-Service

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiService.register(username, password); // API-Anfrage an den Registrierungs-Endpunkt
      window.location.href = '/login'; // Weiterleitung zur Login-Seite
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
      <button type="submit">Registrieren</button>
    </form>
  );
}

export default RegisterForm;