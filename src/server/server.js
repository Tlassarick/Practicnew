import express from 'express';
import cors from 'cors'
import { getData } from '../database/database.js';
const app = express();
app.use(cors());
const PORT = 3001;
app.use(cors({
    origin: 'http://localhost:3000'
  }));
  app.get('/api/abonents', (req, res) => {
    res.json({
      abonents: [
        { pib: "Иванов Иван Иванович", position: "Менеджер", unit_name: "Отдел продаж", working_room: "101" },
        // Добавьте больше данных согласно вашей структуре
      ]
    });
  });
  
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });