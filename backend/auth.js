const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Beispiel-Datenbankbenutzer
const users = [
  {
    id: 1,
    username: 'admin',
    password: '$2a$10$XXXXXXXXXXXXXXXXXXXXXXXXX', // Beispiel gehashtes Passwort
  },
];

// Funktion zum Vergleichen des Passworts
const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

// JWT erstellen
const generateToken = (user) => {
  return jwt.sign({ id: user.id, username: user.username }, 'SECRET_KEY', { expiresIn: '1h' });
};

// Login-Handler
const login = async (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username);

  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  const isPasswordValid = await comparePassword(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({ message: 'Invalid password' });
  }

  const token = generateToken(user);

  return res.status(200).json({ message: 'Login successful', token });
};

module.exports = { login };
