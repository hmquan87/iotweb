// Example React component

import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/data') // Assume your server is running on the same domain
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Data from MySQL</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
