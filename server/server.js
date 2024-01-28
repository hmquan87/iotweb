const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

const port = 3001;

app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb',
})

// app.get('/', (re, res) =>{
//     return res.json("from backend");
// });

app.get('/clicks', (re, res) =>{
    const sql = "SELECT * FROM click";
    db.query(sql, (err, data) =>{
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.listen(port, () => {
    console.log("listening " + port);
});