import express from 'express';
import { getNews } from '../controllers/fetchNews-controller.js';

const router = express.Router();

router.get('/', getNews); // Use the root path here, since the route prefix is defined in routes/index.js

export default router;