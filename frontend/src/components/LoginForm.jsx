import { useState } from 'react';
import apiService from '../services/apiService';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await apiService.login(username, password);
      // JWT im Local Storage speichern oder Kontext verwenden
      localStorage.setItem('token', data.token);
      // Weiterleitung zur Dashboard-Seite
      window.location.href = '/dashboard';
    } catch (error) {
      setError(error.response.data.error); // Fehler anzeigen
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
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