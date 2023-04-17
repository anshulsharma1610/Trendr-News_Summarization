import NewsArticleModel from '../models/newsModel.js';

export const getAllNewsArticles = async () => {
    return await NewsArticleModel.find();
};

export const getNewsArticleById = async (id) => {
    return await NewsArticleModel.findById(id);
};

export const updateNewsArticleById = async (id, updatedData) => {
    return await NewsArticleModel.findByIdAndUpdate(id, updatedData, { new: true });
};

export const deleteNewsArticleById = async (id) => {
    return await NewsArticleModel.findByIdAndDelete(id);
};

export const createNewsArticle = async (newArticleData) => {
    const newArticle = new NewsArticleModel(newArticleData);
    return await newArticle.save();
};

export const likeNewsArticleById = async (id) => {
    const article = await NewsArticleModel.findById(id);
    if (!article) {
        return null;
    }
    article.likes += 1;
    await article.save();
    return article;
};

export const addCommentToNewsArticle = async (articleId, commentObj) => {
    const article = await NewsArticleModel.findById(articleId);
    if (!article) {
        return null;
    }
    article.comments.push(commentObj); // Save the entire comment object
    await article.save();
    return article;
};

export const shareNewsArticleById = async (id) => {
    const article = await NewsArticleModel.findById(id);
    if (!article) {
        return null;
    }
    article.shares += 1;
    await article.save();
    return article;
};

export const likeOrUnlikeArticle = async (articleId, userId) => {
    const article = await NewsArticleModel.findById(articleId);
    if (!article) {
        return null;
    }
    // Check if the user has already liked the article
    const userIndex = article.likedBy.indexOf(userId);
    if (userIndex === -1) {
        // User has not liked the article, so add a like
        article.likes += 1;
        article.likedBy.push(userId);
    } else {
        // User has already liked the article, so remove the like
        article.likes -= 1;
        article.likedBy.splice(userIndex, 1);
    }
    await article.save();
    return article;
};

// Search news articles based on categories and title keywords
export const searchNews = async (categories, keywords) => {
    // Build the search query
    const searchQuery = {
        $and: [
            ...(categories ? [{ category: { $in: categories.split(',') } }] : []),
            ...(keywords ? [{ title: { $regex: keywords, $options: 'i' } }] : []),
        ],
    };

    // Query the database using the Mongoose model
    const newsArticles = await NewsArticleModel.find(searchQuery);
    return newsArticles;
};


