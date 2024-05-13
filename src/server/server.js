import express from 'express';
import cors from 'cors';
import { getData,deleteData } from '../database/database.js';

const app = express();
const port = 3001;
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));
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