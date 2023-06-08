import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
const PORT = process.env.PORT || 5000;

import userRoutes from './routes/userRoutes.js';
import connectDB from './config/db.js';

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`☕ Express server listening on port: ${PORT}`)
);
