const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb',
});

router.get('/clicks', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM click.mydb');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ error: 'Failed to retrieve data' });
  }
});

module.exports = router;
