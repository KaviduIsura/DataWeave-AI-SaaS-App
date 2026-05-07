import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Import config
import { connectDB } from './src/config/db';

// Import Routes
import chatRoutes from './src/routes/chat.routes';
import userRoutes from './src/routes/user.routes';
import historyRoutes from './src/routes/history.routes';

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Allow all origins for development
app.use(express.json()); // Parse JSON bodies

app.get('/', (req: Request, res: Response) => {
  res.send('DataWeave API is running');
});

app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello World!' });
});

// Mount Routes
app.use('/api/chat', chatRoutes);
app.use('/api/users', userRoutes);
app.use('/api/history', historyRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
