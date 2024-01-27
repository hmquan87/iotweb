// // server.js
// const express = require('express');
// const mysql = require('mysql');

// const app = express();
// const port = 3001;

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'mydb',
// });

// db.connect((err) => {
//   if (err) {
//     console.error('MySQL connection error: ' + err.stack);
//     return;
//   }
//   console.log('Connected to MySQL database');
// });

// // Define API routes here

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
// // server.js

// // Example route to retrieve data from MySQL
// // app.get('/api/data', (req, res) => {
// //   const sql = 'SELECT * FROM click';
// //   db.query(sql, (err, result) => {
// //     if (err) {
// //       console.error('Error executing MySQL query: ' + err.message);
// //       res.status(500).send('Internal Server Error');
// //       return;
// //     }
// //     res.json(result);
// //   });
// // });

// app.get('/click', async (req, res) => {
//   try {
//     const [rows] = await db.execute('SELECT * FROM click.mydb'); // Use await for cleaner syntax
//     res.json(rows); // Send the fetched data as JSON
//   } catch (err) {
//     console.error('Error fetching data:', err);
//     res.status(500).json({ error: 'Failed to retrieve data' }); // Send a descriptive error response
//   }
// });