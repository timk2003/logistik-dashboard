const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// API-Endpunkte

// Benutzerregistrierung
app.post('/api/auth/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    res.status(201).json(user);
  } catch (error) {
    console.error('Fehler bei der Benutzerregistrierung:', error);
    res.status(500).json({ error: 'Ein Fehler ist aufgetreten' });
  }
});

// Benutzeranmeldung
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await prisma.user.findUnique({ where: { username } });

    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ error: 'Ungültige Anmeldedaten' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

    res.json({ token });
  } catch (error) {
    console.error('Fehler bei der Benutzeranmeldung:', error);
    res.status(500).json({ error: 'Ein Fehler ist aufgetreten' });
  }
});

// Lieferscheine hochladen (Beispiel - Implementierung unvollständig)
app.post('/api/lieferscheine', async (req, res) => {
  try {
    // Hier muss die Logik zum Hochladen der Datei (z.B. mit multer) implementiert werden.
    // Ebenso die Logik zum Extrahieren der Daten aus dem Lieferschein (z.B. mit OCR).
    // Und schließlich die Logik zum Speichern der Daten in der Datenbank (mit Prisma).

    res.status(201).json({ message: 'Lieferschein erfolgreich hochgeladen' });
  } catch (error) {
    console.error('Fehler beim Hochladen des Lieferscheins:', error);
    res.status(500).json({ error: 'Ein Fehler ist aufgetreten' });
  }
});

// Lieferscheine abrufen (Beispiel - Implementierung unvollständig)
app.get('/api/lieferscheine', async (req, res) => {
    try {
      // Hier muss die Logik zum Abrufen der Lieferscheine aus der Datenbank (mit Prisma) implementiert werden.
  
      res.json([]); // Leeres Array als Platzhalter
    } catch (error) {
      console.error('Fehler beim Abrufen der Lieferscheine:', error);
      res.status(500).json({ error: 'Ein Fehler ist aufgetreten' });
    }
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});