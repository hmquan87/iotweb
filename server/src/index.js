const express = require('express');
const mysql = require('mysql');
//const clicksRouter = require('./routes/clicks');

const app = express();
const port = process.env.PORT || 3001;

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

app.get('/clicks', async (req, res) => {
    try {
      const [rows] = await db.execute('SELECT * FROM click.mydb');
      res.json(rows);
    } catch (err) {
      console.error('Error fetching data:', err);
      res.status(500).json({ error: 'Failed to retrieve data' });
    }
  });
  

//app.use('/clicks', clicksRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
