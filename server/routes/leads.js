import express from 'express';
import { getLeads, createLead } from '../controllers/leadController.js';

const router = express.Router();

router.get('/leads', getLeads);
router.post('/leads', createLead);

export default router;