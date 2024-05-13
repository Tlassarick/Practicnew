import mysql from "mysql2";

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
    connection.query('SELECT * FROM abonent', (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};
export const deleteData = (abonentId) => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM abonent WHERE abonent_id = ?', [abonentId], (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};
export default connection;