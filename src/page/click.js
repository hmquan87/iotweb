import React, { useEffect, useState } from 'react';

const Click = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/clicks')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data);
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Data Display</h1>
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
