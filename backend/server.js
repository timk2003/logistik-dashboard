const express = require('express');
const cors = require('cors'); // Für Cross-Origin-Anfragen (wichtig für die Entwicklung)
const authRoutes = require('./routes/auth'); // Deine Auth-Routen
const { PrismaClient } = require('@prisma/client');

const app = express();
const port = process.env.PORT || 5000;
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json()); // Für das Parsen von JSON-Daten

app.use('/api/auth', authRoutes); // Verwende deine Auth-Routen

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});