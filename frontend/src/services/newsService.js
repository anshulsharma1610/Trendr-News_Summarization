import axios from "axios";
const NEWS_API_URL = "http://localhost:8000/api/news"
export const fetchNews = async () => {
    const response = await axios.get(NEWS_API_URL);
    return response.data;
};

export const likeNewsArticle = async (articleId) => {
    await axios.post(`${NEWS_API_URL}/${articleId}/like`);
};

export const commentOnNewsArticle = async (articleId, newComment) => {
    try {
        const response = await axios.post(`${NEWS_API_URL}/${articleId}/comment`, newComment);
        return response.data; // Return the updated article
    } catch
    (error) {
        console.error(error);
        return null;
    }
};

export const shareNewsArticle = async (articleId) => {
    await axios.post(`${NEWS_API_URL}/${articleId}/share`);
};

// Define other service request functions here if needed
