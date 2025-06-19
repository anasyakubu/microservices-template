import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes';

const app = express();
app.use(bodyParser.json());
app.use('/auth', authRoutes);

mongoose.connect('mongodb://auth-db:27017/auth-service')
  .then(() => console.log('Auth DB Connected'))
  .catch((err: any) => console.error(err));

app.listen(4000, () => console.log('Auth Service running on port 4000'));