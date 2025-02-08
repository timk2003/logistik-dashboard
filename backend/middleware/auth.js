const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Extrahiere den Token aus dem Header

  if (!token) {
    return res.status(401).json({ error: 'Kein Token, Autorisierung abgelehnt' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.userId; // Füge die Benutzer-ID zur Anfrage hinzu
    next(); // Erlaube den Zugriff auf die nächste Funktion
  } catch (error) {
    res.status(401).json({ error: 'Token ist ungültig' });
  }
};