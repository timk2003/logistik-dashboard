import axios from 'axios';

const API_URL = 'http://localhost:3001/api'; // URL deines Backends

const apiService = {
  async register(username, password) {
    try {
      const response = await axios.post(`${API_URL}/auth/register`, {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      console.error('Fehler bei der Registrierung:', error);
      throw error; // Fehler weiterleiten, damit die Komponente ihn behandeln kann
    }
  },

  async login(username, password) {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      console.error('Fehler beim Login:', error);
      throw error;
    }
  },

  async getLieferscheine() {
    try {
      const response = await axios.get(`${API_URL}/lieferscheine`);
      return response.data;
    } catch (error) {
      console.error('Fehler beim Abrufen der Lieferscheine:', error);
      throw error;
    }
  },

  // Weitere API-Funktionen hinzufügen...
};

export default apiService;