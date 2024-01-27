import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Data} from './data/dataclick';
import '../css/pageClick.css';

const Click = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   // Thực hiện yêu cầu HTTP để lấy dữ liệu từ MySQL
  //   axios.get('http://localhost/iot/clickdata.php')  // Điều chỉnh đường dẫn API endpoint
  //     .then(response => {
  //       setData(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []); // Chạy chỉ một lần sau khi component được mount

  return (
    <div className="click">
      <h1>Click History</h1>
      {/* {data.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Light</th>
              <th>Fan</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.light}</td>
                <td>{item.fan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )} */}
      {Data.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Light</th>
              <th>Fan</th>
            </tr>
          </thead>
          <tbody>
            {Data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.light}</td>
                <td>{item.fan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}

    </div>
  );
};

export default Click;