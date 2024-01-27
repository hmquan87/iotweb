// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {Data} from './data/dataclick';
// import '../css/pageClick.css';

// const Click = () => {
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

//   return (
//     <div className="click">
//       <h1>Click History</h1>
//       {/* {data.length > 0 ? (
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Light</th>
//               <th>Fan</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map(item => (
//               <tr key={item.id}>
//                 <td>{item.id}</td>
//                 <td>{item.light}</td>
//                 <td>{item.fan}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No data available</p>
//       )} */}
//       {Data.length > 0 ? (
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Light</th>
//               <th>Fan</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Data.map(item => (
//               <tr key={item.id}>
//                 <td>{item.id}</td>
//                 <td>{item.light}</td>
//                 <td>{item.fan}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No data available</p>
//       )}

//     </div>
//   );
// };

// export default Click;

// DataDisplay.js
// import React, { useEffect, useState } from 'react';

// const Click = () => {
//   const [data, setData] = useState([]);

//   // useEffect(() => {
//   //   // Fetch data from your Express server
//   //   fetch('/clicks')
//   //     .then(response => response.json())
//   //     .then(result => {
//   //       console.log('Fetched data:', result);
//   //       setData(result);
//   //     })
//   //     .catch(error => console.error('Error fetching data:', error));
//   // }, []);
  
//   return (
//     <div>
//       <h1>Data Display</h1>
//       {/* <ul>
//         {data.map(item => (
//           <li key={item.id}>{item.id}</li>
//           // Replace 'columnName' with the actual column name you want to display
//         ))}
//       </ul> */}
//       {data.length === 0 ? (
//         <p>Loading...</p>
//       ) : (
//         <table>
//            <thead>
//              <tr>
//                <th>ID</th>
//                <th>Light</th>
//                <th>Fan</th>
//              </tr>
//            </thead>
//            <tbody>
//              {data.map(item => (
//                <tr key={item.id}>
//                  <td>{item.id}</td>
//                  <td>{item.light}</td>
//                  <td>{item.fan}</td>
//                </tr>
//              ))}
//            </tbody>
//          </table>
//       )}

//     </div>
//   );
// };

// export default Click;





import React, { useEffect, useState } from 'react';

const Click = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/clicks');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Fetched data:', result);
        setData(result);
        setLoading(false);
        setError(null);
      } catch (error) {
       
        setError('Error fetching data. Please try again.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data Display</h1>
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
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
      )}
    </div>
  );
};

export default Click;
