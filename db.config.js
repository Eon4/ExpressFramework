import dotenv from 'dotenv';
import mysql from 'mysql2';


dotenv.config();

// console.log('DBUSER:', process.env.DBUSER);
// console.log('DBPASSWORD:', process.env.DBPASSWORD);


const db = mysql.createConnection({
  host: process.env.DBHOST,
  database: process.env.DBNAME,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  port: process.env.DBPORT,
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

export default db;

