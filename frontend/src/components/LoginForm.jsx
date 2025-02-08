import React from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Ladezustand

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Ladezustand aktivieren
    setError(null); // Fehler zurücksetzen

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', { // Volle URL verwenden
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        window.location.href = '/dashboard'; // Oder React Router verwenden
      } else {
        setError(data.error || 'Login fehlgeschlagen'); // Spezifischere Fehlermeldung anzeigen
      }
    } catch (error) {
      console.error('Fetch Error:', error);
      setError('Ein Fehler ist aufgetreten.');
    } finally {
      setIsLoading(false); // Ladezustand deaktivieren
    }
      
};
    

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">E-Mail:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Passwort:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Anmelden...' : 'Anmelden'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Fehleranzeige */}
    </form>
  );
};

export default LoginForm;