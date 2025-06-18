import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', userRoutes);
app.get('/', (_req, res) => {
    res.send('Server On');
  });

mongoose.connect(process.env.MONGODB_URI!)
  .then(() => {
    console.log('MongoDB conectado.');
  })
  .catch(err => console.error(err));

export default app;
