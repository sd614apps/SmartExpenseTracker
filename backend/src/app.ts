import express from 'express';
// import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';

dotenv.config();

const app = express();

// Middleware
// app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);

// Health Check Route
app.get('/', (req, res) => {
  res.send('SmartExpenseTracker Backend is running');
});

export default app;
