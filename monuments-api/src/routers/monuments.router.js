import { Router } from 'express';
import { getMons, addMon } from '../controllers/monuments.controller.js';

export const router = Router();

router.get("/api/monuments", getMons);
router.post("/api/monuments", addMon);