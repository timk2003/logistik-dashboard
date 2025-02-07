const express = require('express');
const authRoutes = require('./routes/auth');

const app = express();

app.use(express.json()); // Für JSON-Daten im Request-Body

app.use('/api/auth', authRoutes); // Auth-Routen

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server läuft auf http://localhost:${PORT}`));
