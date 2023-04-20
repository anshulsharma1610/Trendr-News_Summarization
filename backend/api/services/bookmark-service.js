import Bookmark from "../models/bookmark.js";
import NewsArticleModel from "../models/newsModel.js";


// This code defines a service function that toggles a bookmark for a user on a news article, 
// either creating or deleting the bookmark as needed.

export const toggleBookmark = async (userId, articleId) => {
    console.log("Inside service")
    const bookmark = await Bookmark.findOne({ userId, articleId });
    if (bookmark) {
        // If the bookmark exists, remove it
        await Bookmark.deleteOne({ _id: bookmark._id });
        await NewsArticleModel.findByIdAndUpdate(articleId, { $pull: { bookmarkedBy: userId } });
        return { bookmarkAdded: false };
    } else {
        // If the bookmark does not exist, add it
        await Bookmark.create({ userId, articleId });
        await NewsArticleModel.findByIdAndUpdate(articleId, { $push: { bookmarkedBy: userId } });
        return { bookmarkAdded: true };
    }
};

// This code defines a service function that retrieves all bookmarks for a specific user,
//  including the associated news article information.

export const getUserBookmarks = async (userId) => {
    console.log(userId)
    const bookmarks = await Bookmark.find({ userId }).populate('articleId');
    return bookmarks;
};
