import { Link } from 'react-router-dom';

function Header() {
  const isAuthenticated = !!localStorage.getItem('token'); // Überprüfen, ob ein JWT vorhanden ist

  const handleLogout = () => {
    localStorage.removeItem('token'); // JWT entfernen
    window.location.href = '/login'; // Weiterleitung zur Login-Seite
  };

  return (
    <header>
      <nav>
        <Link to="/">Startseite</Link>
        {!isAuthenticated && <Link to="/login">Anmelden</Link>} {/* Link zur Login-Seite */}
        {!isAuthenticated && <Link to="/register">Registrieren</Link>} {/* Link zur Registrierungsseite */}
        {isAuthenticated && <Link to="/dashboard">Dashboard</Link>} {/* Link zur Dashboard-Seite */}
        {isAuthenticated && <button onClick={handleLogout}>Abmelden</button>} {/* Logout-Button */}
      </nav>
    </header>
  );
}

export default Header;