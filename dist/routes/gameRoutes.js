import { Router } from 'express';
import gameController from '../controllers/gameController';
const router = Router();
router.get('/start', gameController.start);
