import { toggleBookmark, getUserBookmarks } from '../services/bookmark-service.js';

import {
    setSuccessfulResponse,
    setErrorResponse
} from '../util/statusCodes.js';

// This code exports an function that toggles bookmarks for a 
// given user and article ID and returns a JSON response with the result or an error message.
export const toggleBookmarks = async (req, res) => {
    try {
        const { userId, articleId } = req.body;
        const result = await toggleBookmark(userId, articleId);
        res.status(200).json(result);
    } catch (error) {
        return setErrorResponse(res, error);
    }
};

// This code exports an function that gets all bookmarks for a given user ID, 
// logs them to the console, and returns a successful response with the bookmarks or an error message.

export const getAllUserBookmarks = async (req, res) => {
    try {
        const userId = req.params.id;
        const bookmarks = await getUserBookmarks(userId);
        console.log(bookmarks)
        setSuccessfulResponse(bookmarks, res);
    } catch (error) {
        return setErrorResponse(res, error);
    }
};
