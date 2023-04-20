

import express from 'express';
import { getNews } from '../controllers/trendingNews-controller.js';


const router = express.Router();

router.get('/', getNews); //route for retrieving trending news.

export default router;

