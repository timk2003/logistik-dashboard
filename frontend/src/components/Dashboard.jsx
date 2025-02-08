import { useState, useEffect } from 'react';
import apiService from '../services/apiService';

function Dashboard() {
  const [lieferscheine, setLieferscheine] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await apiService.getLieferscheine();
      setLieferscheine(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {/* Lieferscheine anzeigen */}
      {lieferscheine.map((lieferschein) => (
        <div key={lieferschein.id}>
          {/* Details zum Lieferschein */}
        </div>
      ))}
    </div>
  );
}

export default Dashboard;