import { Router } from 'express';
import { chatCompletion, chatStream } from '../controllers/chat.controller';
import { protect } from '../middleware/auth';

const router = Router();

// Protect all chat routes
router.use(protect);

router.post('/', chatCompletion);
router.post('/stream', chatStream);

export default router;
