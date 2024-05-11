import express from 'express';
import { getData } from '../database/database.js';
const app = express();
const PORT = 3001;

app.get('/api/abonents', async (req, res) => {
  try {
    const data = await getData();
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});