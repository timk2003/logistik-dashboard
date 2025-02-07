const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("API läuft!");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server läuft auf http://localhost:${PORT}`));
