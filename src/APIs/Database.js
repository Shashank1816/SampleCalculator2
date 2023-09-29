// api/database.js
const mysql = require('mysql');

const dbConfig = {
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'mydb',
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

module.exports = connection;
