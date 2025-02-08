/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Wichtig: Hier deine index.html Datei
    "./src/**/*.{js,ts,jsx,tsx}", // Hier alle Dateien im src Ordner und Unterordner
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}