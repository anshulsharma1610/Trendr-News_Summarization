

import { fetchTrendingNews } from '../services/trendingNews-service.js';


// getNews is an function that fetches trending news based on a 
// request's query parameters and responds with a JSON object
//  containing the fetched news or a 500 status code and an error message if an error occurs.

export const getNews = async (req, res) => {
    try {
        const queryParams = req.query;
        const trendingNews = await fetchTrendingNews(queryParams);
        res.status(200).json(trendingNews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};