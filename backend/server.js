import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import gashaRouter from './routes/gashaRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config';

//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//api end points
app.use('/api/gasha', gashaRouter);
app.use('/images', express.static('uploads'));
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
  res.send('API Working');
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});

//
