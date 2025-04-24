import express from 'express';
import { getAllApplications, updateStatus } from '../controllers/adminController.js';
const router = express.Router();

router.get('/applications', getAllApplications);
router.put('/application/:id/status', updateStatus);

export default router;
