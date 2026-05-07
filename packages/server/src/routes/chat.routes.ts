import { Router } from 'express';
import { chatCompletion, chatStream } from '../controllers/chat.controller';

const router = Router();

router.post('/', chatCompletion);
router.post('/stream', chatStream);

export default router;
