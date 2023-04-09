import {
    getAllNewsArticles,
    getNewsArticleById,
    updateNewsArticleById,
    deleteNewsArticleById,
    createNewsArticle,
    likeNewsArticleById,
    addCommentToNewsArticle,
    shareNewsArticleById
} from '../services/news-service.js';

export const getNews = async (req, res) => {
    try {
        const newsArticles = await getAllNewsArticles();
        res.status(200).json(newsArticles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getArticleById = async (req, res) => {
    try {
        const articleId = req.params.id;
        const article = await getNewsArticleById(articleId);
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateArticleById = async (req, res) => {
    try {
        const articleId = req.params.id;
        const updatedData = req.body;
        const article = await updateNewsArticleById(articleId, updatedData);
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteArticleById = async (req, res) => {
    try {
        const articleId = req.params.id;
        const article = await deleteNewsArticleById(articleId);
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.status(200).json({ message: 'Article deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createArticle = async (req, res) => {
    try {
        const newArticleData = req.body;
        const newArticle = await createNewsArticle(newArticleData);
        res.status(201).json(newArticle);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ... other controller functions

export const likeArticle = async (req, res) => {
    try {
        const articleId = req.params.id;
        const article = await likeNewsArticleById(articleId);
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addComment = async (req, res) => {
    try {
        const articleId = req.params.id;
        const comment = req.body;
        const article = await addCommentToNewsArticle(articleId, comment);
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const shareArticle = async (req, res) => {
    try {
        const articleId = req.params.id;
        const article = await shareNewsArticleById(articleId);
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

