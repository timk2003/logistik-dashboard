import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token); // Speichere den Token
        // Weiterleitung zur Dashboard-Seite
        window.location.href = '/dashboard'; // Oder verwende React Router
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError('Ein Fehler ist aufgetreten.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... Eingabefelder für E-Mail und Passwort ... */}
      <button type="submit">Anmelden</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default LoginForm;