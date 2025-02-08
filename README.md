Klar, hier ist ein Entwurf für eine `README.md`-Datei, die du schnell anpassen kannst:

```markdown
# Logistik-Dashboard

Ein React-basiertes Dashboard zur Verwaltung und Visualisierung von Logistikdaten, insbesondere Lieferscheinen.

## Beschreibung

Dieses Projekt digitalisiert den Prozess der Lieferscheinverwaltung und bietet eine übersichtliche Darstellung wichtiger Logistikdaten. Durch automatische Texterkennung (OCR) werden Informationen aus Lieferscheinen extrahiert und in einem Dashboard visualisiert.

## Features

*   **Lieferschein-Scan & Datenerfassung:** Automatisches Auslesen von Informationen (Lieferant, Tor-Nummer, Kennzeichen, Fahrername, Gewicht) aus Lieferscheinen (PDF oder Bild) mittels OCR.
*   **Dashboard & Statistiken:** Visualisierung der erfassten Lieferdaten in Diagrammen und Tabellen. Filter- und Sortierfunktionen sowie Monats- und Jahresstatistiken.
*   **Benutzerverwaltung & Rechte:** Verwaltung von Nutzern mit unterschiedlichen Rollen (Admin, Mitarbeiter) und entsprechenden Berechtigungen.
*   **Sicherheit & Authentifizierung:** Sichere Nutzerverwaltung durch JWT und BCrypt.

## Tech-Stack

*   **Frontend:** React, Vite, Tailwind CSS, React Router
*   **Backend:** Node.js, Express, PostgreSQL, Prisma
*   **OCR:** Tesseract OCR

## Installation

1.  Klone das Repository:

```bash
git clone [https://github.com/timk2003/logistik-dashboard](https://github.com/timk2003/logistik-dashboard)
```

2.  Navigiere zum Frontend-Verzeichnis:

```bash
cd logistik-dashboard/frontend
```

3.  Installiere die Frontend-Abhängigkeiten:

```bash
npm install
```

4.  Navigiere zum Backend-Verzeichnis:

```bash
cd ../backend
```

5.  Installiere die Backend-Abhängigkeiten:

```bash
npm install
```

6.  Konfiguriere die Datenbankverbindung in der `.env`-Datei im Backend-Verzeichnis.

7.  Generiere den Prisma Client:

```bash
npx prisma generate
```

## Verwendung

1.  Starte den Entwicklungsserver für das Frontend:

```bash
cd logistik-dashboard/frontend
npm run dev
```

2.  Starte den Server für das Backend:

```bash
cd logistik-dashboard/backend
node server.js
```
