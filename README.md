# Logistik Dashboard Web-App

Dies ist eine Web-App, die als **Logistik-Dashboard** dient. Die App ermöglicht es, Lieferscheine zu scannen und relevante Daten wie Lieferant, Tor-Nummer, Kennzeichen, Fahrername, Gewicht und mehr zu speichern. Die Daten werden archiviert und statistisch in Diagrammen dargestellt. Es gibt eine Benutzerverwaltung mit Login und JWT-Authentifizierung.

## Funktionen

- Scannen von Lieferscheinen
- Speicherung von Lieferant, Tor-Nummer, Kennzeichen, Fahrername, Gewicht und weiteren Daten
- Statistische Auswertungen und Diagramme
- Benutzerlogin mit JWT-Authentifizierung
- Rechteverwaltung
- Modernes und sauberes Frontend

## Tech-Stack

- **Frontend**: React.js (mit Vite)  
- **Backend**: Node.js (Express)  
- **Datenbank**: PostgreSQL  
- **Auth**: JWT (JSON Web Token)  
- **Styling**: CSS, eventuell mit Framework wie Tailwind CSS  

## Installation

### 1. **Backend Setup**

1. Klone das Repository:
   ```bash
   git clone <repository-url>
   cd logistik-dashboard/backend
   ```

2. Installiere die Abhängigkeiten:
   ```bash
   npm install
   ```

3. Erstelle eine `.env`-Datei mit den folgenden Variablen:
   ```env
   DATABASE_URL=postgresql://admin:n4s8v57s648e5@localhost:5432/logistik_dashboard
   ```

4. Führe die Prisma-Migration aus:
   ```bash
   npx prisma migrate dev --name init
   ```

5. Starte den Server:
   ```bash
   npm run dev
   ```

   Der Server läuft nun auf `http://localhost:5000`.

### 2. **Frontend Setup**

1. Klone das Repository:
   ```bash
   git clone <repository-url>
   cd logistik-dashboard/frontend
   ```

2. Installiere die Abhängigkeiten:
   ```bash
   npm install
   ```

3. Starte die React-App:
   ```bash
   npm run dev
   ```

   Das Frontend läuft nun auf `http://localhost:3000`.

## API-Endpunkte

### 1. **Login**

- **URL**: `/api/auth/login`
- **Methode**: `POST`
- **Daten**:
  ```json
  {
    "username": "admin",
    "password": "deinPasswort"
  }
  ```

- **Antwort**:
  ```json
  {
    "message": "Login successful",
    "token": "JWT-TOKEN"
  }
  ```

### 2. **Geschützte Route**

- **URL**: `/api/protected`
- **Methode**: `GET`
- **Header**:
  ```json
  {
    "Authorization": "Bearer JWT-TOKEN"
  }
  ```

- **Antwort**:
  ```json
  {
    "message": "This is a protected route",
    "user": { "id": 1, "username": "admin" }
  }
  ```

## Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Weitere Details finden Sie in der LICENSE-Datei.