import NewsArticleModel from '../models/newsModel.js';
import { isUserSubbed } from '../controllers/user-controller.js';

// asynchronous function that retrieves all news articles from the NewsArticleModel.
export const getAllNewsArticles = async () => {
    return await NewsArticleModel.find();
};

// asynchronous function that  retrieves a single news article from the NewsArticleModel by its ID.
export const getNewsArticleById = async (id) => {
    return await NewsArticleModel.findById(id);
};

// asynchronous function updates a single news article in the NewsArticleModel 
// by its ID with the provided updatedData, and returns the updated article
export const updateNewsArticleById = async (id, updatedData) => {
    return await NewsArticleModel.findByIdAndUpdate(id, updatedData, { new: true });
};

// asynchronous function that deletes a single news article from the NewsArticleModel by its ID.
export const deleteNewsArticleById = async (id) => {
    return await NewsArticleModel.findByIdAndDelete(id);
};

// asynchronous function that creates a new news article in the NewsArticleModel 
// with the provided newArticleData, and returns the created article.
export const createNewsArticle = async (newArticleData) => {
    const newArticle = new NewsArticleModel(newArticleData);
    return await newArticle.save();
};

//asynchronously increments the number of likes of a news article in the 
// NewsArticleModel by its ID, and returns the updated article.
export const likeNewsArticleById = async (id) => {
    const article = await NewsArticleModel.findById(id);
    if (!article) {
        return null;
    }
    article.likes += 1;
    await article.save();
    return article;
};

// asynchronous function  adds a comment to a news article in the NewsArticleModel 
// by its ID, and returns the updated article.

export const addCommentToNewsArticle = async (articleId, commentObj) => {
    const article = await NewsArticleModel.findById(articleId);
    if (!article) {
        return null;
    }
    article.comments.push(commentObj); // Save the entire comment object
    await article.save();
    return article;
};

// asynchronous function increments the number of shares of a news article in the
// NewsArticleModel by its ID, and returns the updated article.
export const shareNewsArticleById = async (id) => {
    const article = await NewsArticleModel.findById(id);
    if (!article) {
        return null;
    }
    article.shares += 1;
    await article.save();
    return article;
};

// asynchronous function adds or removes a like from a news article in the NewsArticleModel by its ID,
//  based on the user who performed the action, and returns the updated article.
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
export const searchNews = async (categories, keywords, userId) => {
    // Build the search query
    const searchQuery = {
        $and: [
            ...(categories ? [{ category: { $in: categories.split(',') } }] : []),
            ...(keywords ? [{ title: { $regex: keywords, $options: 'i' } }] : []),
        ],
    };

    // If the $and array is empty, remove the $and operator from the query
    if (searchQuery.$and.length === 0) {
        delete searchQuery.$and;
    }

    // Query the database using the Mongoose model
    const newsArticles = await NewsArticleModel.find(searchQuery);

    const isUserSubscribed = await isUserSubbed(userId);
    // If the user has a valid subscription, return all articles
    if (isUserSubscribed) {
        return newsArticles;
    } else {
        // If the user does not have a valid subscription, return only the first 5 articles
        return newsArticles.slice(0, 5);
    }

};

// asynchronous function counts the total number of news articles in the NewsArticleModel 
// and returns the count.
export const totalNews = async () => {
    const result = await NewsArticleModel.countDocuments();
    return result;
}

// asynchronous function calculates the total number of likes and comments across all news articles in the
// using an aggregation pipeline, and returns the result.

export const totalSocials = async () => {
    const pipeline = [
        {
            $group: {
                _id: null,
                totalLikes: { $sum: '$likes' },
                totalComments: { $sum: { $size: '$comments' } },
            },
        },
    ];
    const result = NewsArticleModel.aggregate(pipeline)
        .then((result) => {
            return result;
        })
        .catch((error) => {
            console.error(error);
        });
    return result;
}
