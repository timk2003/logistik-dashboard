const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3001;

app.use(cors({
  origin: 'http://localhost:5173' // Erlaubt Anfragen von deinem Frontend
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware für die Authentifizierung (JWT)
const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Kein Token vorhanden' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Ungültiges Token' });
  }
};

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

// Benutzerdaten abrufen (geschützt)
app.get('/api/auth/me', authMiddleware, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.user } });
    if (!user) {
      return res.status(404).json({ error: 'Benutzer nicht gefunden' });
    }
    res.json(user);
  } catch (error) {
    console.error('Fehler beim Abrufen der Benutzerdaten:', error);
    res.status(500).json({ error: 'Ein Fehler ist aufgetreten' });
  }
});

// Lieferscheine hochladen (Platzhalter)
app.post('/api/lieferscheine', authMiddleware, async (req, res) => {
  try {
    // 1. Datei hochladen (z.B. mit multer)
    // 2. OCR-Verarbeitung (z.B. mit Tesseract)
    // 3. Daten in die Datenbank speichern (mit Prisma)

    res.status(201).json({ message: 'Lieferschein erfolgreich hochgeladen' });
  } catch (error) {
    console.error('Fehler beim Hochladen des Lieferscheins:', error);
    res.status(500).json({ error: 'Ein Fehler ist aufgetreten' });
  }
});

// Lieferscheine abrufen (Platzhalter)
app.get('/api/lieferscheine', authMiddleware, async (req, res) => {
  try {
    const lieferscheine = await prisma.lieferschein.findMany({
      where: { userId: req.user }, // Nur die Lieferscheine des aktuellen Benutzers
    });
    res.json(lieferscheine);
  } catch (error) {
    console.error('Fehler beim Abrufen der Lieferscheine:', error);
    res.status(500).json({ error: 'Ein Fehler ist aufgetreten' });
  }
});

// Verbindung zur Datenbank aufbauen und überprüfen
prisma.$connect()
  .then(() => {
    console.log('✅ Verbindung zur Datenbank erfolgreich hergestellt!');
  })
  .catch((error) => {
    console.error('❌ Fehler beim Verbindungsaufbau zur Datenbank:', error);
  });

// Health-Check-Endpunkt
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Backend ist online!' });
});


// Server starten
app.listen(port, () => {
  console.log(`
  ------------------------------
   --- 🚚 Logistic App ---      
      v1.0.0 by Tim Krisch    
  ------------------------------
   🚀 Backend wird gestartet...   
  `);
  console.log(`✅ Backend läuft auf Port: ${port}`);
});
