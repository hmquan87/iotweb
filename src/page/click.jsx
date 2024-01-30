import React, { useEffect, useState } from 'react';

const Click = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/clicks');
      const newData = await response.json();
      setData(newData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    
    <div>
      <h1>Data Click</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Light</th>
            <th>Fan</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.light}</td>
                <td>{d.fan}</td>
                <td>{d.time}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Click;
