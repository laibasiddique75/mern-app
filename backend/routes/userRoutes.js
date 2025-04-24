import express from 'express';
import { registerUser, loginUser, submitLoan, getSlip } from '../controllers/userController.js';
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/loan', submitLoan);
router.get('/slip/:id', getSlip);

export default router;
