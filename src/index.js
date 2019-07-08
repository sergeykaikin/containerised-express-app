import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, 'static')));

app.listen(PORT, () => console.log(`Application running on port ${PORT}`));
