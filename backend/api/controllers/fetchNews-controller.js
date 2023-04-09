import { fetchNews } from '../services/fetchNews-service.js';

export const getNews = async (req, res) => {
    try {
        const queryParams = req.query;
        const newsArticles = await fetchNews(queryParams);
        res.status(200).json(newsArticles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};