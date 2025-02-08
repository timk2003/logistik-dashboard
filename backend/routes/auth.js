const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Benutzer nicht gefunden' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Falsches Passwort' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET); // Verwende Umgebungsvariable für Geheimnis

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Login fehlgeschlagen' });
  }
});

module.exports = router;