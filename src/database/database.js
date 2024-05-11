import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()


// Connect to the database
const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE
});

connection.connect((err) => {
    if (err) throw err;
  });
  
  export const getData = () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM abonents', (err, results) => {
        if (err) reject(err);
        resolve(results);
        
      });
    });
    
  };
 