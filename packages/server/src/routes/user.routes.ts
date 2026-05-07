import { Router } from 'express';
import {
  getUserProfile,
  updateUserProfile,
} from '../controllers/user.controller';

const router = Router();

router.get('/profile', getUserProfile);
router.put('/profile', updateUserProfile);

export default router;
