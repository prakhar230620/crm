import express from 'express';
import { getProperties, createProperty } from '../controllers/propertyController.js';

const router = express.Router();

router.get('/properties', getProperties);
router.post('/properties', createProperty);

export default router;