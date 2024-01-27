import React from 'react';
import {Data} from './data/datapage3';
import '../css/page3.css'

const Page3 = () => {
    
    
    return (
        <div className="page3">
          <h1>Page 3</h1>
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
                  <th>Temperature</th>
                  <th>Moisture</th>
                  <th>Lights</th>
                </tr>
              </thead>
              <tbody>
                {Data.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.tem}</td>
                    <td>{item.mois}</td>
                    <td>{item.light}</td>
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

export default Page3;