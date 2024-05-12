import express from 'express';
import cors from 'cors'
import { getData } from '../database/database.js';
const app = express();
const port = 3001;
app.use(cors({
    origin: 'http://localhost:3000'
  }));
  app.get('/', (req, res) => {
    res.json({
      abonent: [
        {abonent_id: "1",abonent_number:"2003700",  pib: "Щерба Єкатерина Денисівна", position: "Управління організації роботи", unit_name: "Відділ моніторингу та контролю", working_room: "102" },
        // Добавьте больше данных согласно вашей структуре
      ]
    });
  });
  
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });