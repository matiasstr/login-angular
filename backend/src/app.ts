import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', userRoutes);

console.log('aca loco');

mongoose.connect(process.env.MONGODB_URI!).then(() => {
  console.log('MongoDB conectado.');
}).catch(err => console.error(err));

export default app;
