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

export const addCommentToNewsArticle = async (id, comment) => {
    const article = await NewsArticleModel.findById(id);
    if (!article) {
        return null;
    }
    article.comments.push(comment);
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
