import React from 'react';
function Dashboard() {
  const username = localStorage.getItem('username'); // Benutzername aus dem Local Storage abrufen (optional)

  return (
    <div>
      <h1>Willkommen, {username}!</h1> {/* Willkommensnachricht (optional) */}
      <p>Dies ist das Dashboard.</p>
    </div>
  );
}

export default Dashboard;