import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Import Routes
import chatRoutes from './src/routes/chat.routes';
import userRoutes from './src/routes/user.routes';

dotenv.config();

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
