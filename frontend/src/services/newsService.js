import axios from "axios";
const NEWS_API_URL = "http://localhost:8000/api/news"
const BOOKMARK_API_URL = "http://localhost:8000/api/bookmark";
const TWEETS_API_URL = "http://localhost:8000/api/twitter";

export const fetchNews = async () => {
    const response = await axios.get(NEWS_API_URL);
    return response.data;
};

export const likeOrUnlikeArticle = async (articleId, userId) => {
    const response = await axios.post(`${NEWS_API_URL}/${articleId}/like`, { userId });
    return response.data;
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

export const toggleBookmark = async (articleId, userId) => {
    const response = await axios.post(`${BOOKMARK_API_URL}`, { articleId, userId });
    return response.data;
};

export const getUserBookmarks = async (userId) => {
    const response = await axios.get(`${BOOKMARK_API_URL}/${userId}`);
    return response.data;
};

export const getTweets = async (userId) => {
    const response = await axios.get(`${TWEETS_API_URL}`, { params: { id: userId } });
    return response.data;
}


export const fetchNewsbyPreference = async (preferences, userId) => {
    // Filter out the "Category: " prefix from selected categories
    const selectedCategoriesCleaned = preferences.map((preference) => preference.toLowerCase());
    //console.log(preferences)
    const response = await axios.get('http://localhost:8000/api/news/search', { params: { categories: selectedCategoriesCleaned.join(','), userId: userId } })
    return response.data;
};