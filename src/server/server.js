import express from 'express';
import cors from 'cors';
import { getData } from '../database/database.js';

const app = express();
const port = 3001;

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.delete('/', async (req, res) => {
    const { abonent_id } = req.params;
    try {
      await deleteData(abonent_id); // Предполагаем, что функция deleteData обновлена для работы с abonent_id
      res.status(200).json({ message: 'Element deleted successfully' });
    } catch (err) {
      console.error('Error deleting element:', err);
      res.status(500).send('Error deleting element from database');
    }
  });
app.get('/', async (req, res) => {
    try {
        const data = await getData();
        res.json({ abonent: data });
    } catch (err) {
        console.error('Error fetching data from database:', err);
        res.status(500).send('Error fetching data from database');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});