import { Router } from 'express';
import { protect } from '../middleware/auth';
import {
  getChats,
  getChatById,
  deleteChat,
  updateChatTitle,
} from '../controllers/history.controller';

const router = Router();

// All history routes require authentication
router.use(protect);

router.route('/').get(getChats);
router.route('/:id').get(getChatById).delete(deleteChat).put(updateChatTitle);

export default router;
