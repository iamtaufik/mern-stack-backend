import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import productRoute from './routes/ProductRoute.js';
import './config/Db.js';
import './models/Product.js';
dotenv.config();

const port = process.env.APP_PORT != undefined ? process.env.APP_PORT : 5000;
const app = express();

app.use(
  cors({
    origin: 'https://mymern-stack-frontend.vercel.app',
  })
);
app.use(express.json());
app.use('/v1/api', productRoute);

app.listen(port, () => {
  console.log(`Server up and running at http://localhost:${port}`);
});
