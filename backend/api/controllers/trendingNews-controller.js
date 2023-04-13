import { fetchTrendingNews } from '../services/trendingNews-service.js';

export const getNews = async (req, res) => {
    try {
        const queryParams = req.query;
        const trendingNews = await fetchTrendingNews(queryParams);
        res.status(200).json(trendingNews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};