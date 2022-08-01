import { Router } from 'express';
import PlayController from '../controllers/playController';
const router = Router();
router.get('/move', PlayController.move);
