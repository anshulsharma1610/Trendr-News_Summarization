import { fetchNews } from '../services/fetchNews-service.js';


// asynchronous function that handles HTTP GET requests for news articles based on query parameters
//  and returns a JSON response of the fetched news or an error message if there is an issue.

export const getNews = async (req, res) => {
    try {
        const queryParams = req.query;
        const newsArticles = await fetchNews(queryParams);
        res.status(200).json(newsArticles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};