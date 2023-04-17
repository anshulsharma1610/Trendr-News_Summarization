import express from 'express';
import {
    getNews,
    getArticleById,
    updateArticleById,
    deleteArticleById,
    createArticle,
    likeArticle, addComment, shareArticle, searchNewsArticles
} from '../controllers/news-controller.js';

const router = express.Router();

router.get('/search', searchNewsArticles);
// CRUD operations on newsarticles 
router.get('/', getNews); // Fetch all articles
router.get('/:id', getArticleById); // Retrieve a specific article by ID
router.put('/:id', updateArticleById); // Update an existing article by ID
router.delete('/:id', deleteArticleById); // Delete a specific article by ID
router.post('/', createArticle); // Create a new article

// Other endpoints for liking, commenting, and sharing articles
router.post('/:id/like', likeArticle); // Like an article
router.post('/:id/comment', addComment); // Add a comment to an article
router.post('/:id/share', shareArticle); // Share an article


export default router;
