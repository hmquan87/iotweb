// server.js
const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3001;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb',
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

// Define API routes here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// server.js

// Example route to retrieve data from MySQL
app.get('/api/data', (req, res) => {
    const sql = 'SELECT * FROM test';
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });
  