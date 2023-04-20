import {
    getAllNewsArticles,
    getNewsArticleById,
    updateNewsArticleById,
    deleteNewsArticleById,
    createNewsArticle,
    likeNewsArticleById,
    likeOrUnlikeArticle,
    addCommentToNewsArticle,
    shareNewsArticleById,
    searchNews
} from '../services/news-service.js';

// An asynchronous  function that handles HTTP GET requests for all news articles 
// and returns a JSON response of the fetched news or an error message if there is an issue.

export const getNews = async (req, res) => {
    try {
        const newsArticles = await getAllNewsArticles();
        res.status(200).json(newsArticles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Asynchronous  function that handles HTTP GET requests for a news article by ID,
//  and returns a JSON response of the fetched article or an error message if there is an issue.

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

//asynchronous JavaScript function that handles HTTP PUT requests to update a news
//  article by ID, and returns a JSON response of the updated article or an error message if there is an issue.
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

// An asynchronous function that deletes a news article from a database 
// based on the provided article ID and returns an appropriate HTTP response.

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

// An asynchronous function that creates a new news article in a database based on the provided 
// request body data and returns the newly created article as a JSON response with a HTTP status of 201.
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

// An asynchronous function  allows a user to like or unlike a news article in a database based on the
//  provided article ID and user ID, and returns the updated article as 
//  a JSON response with an appropriate HTTP status.

export const likeArticle = async (req, res) => {
    try {
        const articleId = req.params.id;
        const userId = req.body.userId;
        const article = await likeOrUnlikeArticle(articleId, userId);
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// An asynchronous function that adds a comment to a news article in a 
// database based on the provided article ID and comment object from the request body,
//  and returns the updated article as a JSON response with an appropriate HTTP status.

export const addComment = async (req, res) => {
    try {
        const articleId = req.params.id;
        const commentObj = req.body; // Get the entire comment object from the request body
        const article = await addCommentToNewsArticle(articleId, commentObj); // Pass the entire comment object
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// An asynchronous function that allows a user to share a news article from a database 
// based on the provided article ID and returns the shared article 
// as a JSON response with an appropriate HTTP status.

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


// Search news articles based on categories and title keywords
export const searchNewsArticles = async (req, res) => {
    try {
        // Extract the search criteria from the query parameters
        const { categories, keywords, userId } = req.query;
        console.log(userId)
        // Call the searchNews service to perform the search
        const newsArticles = await searchNews(categories, keywords, userId);

        // Send the search results as the response
        res.status(200).json(newsArticles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
