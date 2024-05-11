import mysql from "mysql2";

// Connect to the database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "practic",
  database: "dps_db",
});

connection.connect((err) => {
  if (err) throw err;
});

export const getData = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM abonent", (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};
