import { toggleBookmark, getUserBookmarks } from '../services/bookmark-service.js';

import {
    setSuccessfulResponse,
    setErrorResponse
} from '../util/statusCodes.js';

export const toggleBookmarks = async (req, res) => {
    try {
        console.log("Inside controller")
        const { userId, articleId } = req.body;
        const result = await toggleBookmark(userId, articleId);
        res.status(200).json(result);
    } catch (error) {
        return setErrorResponse(res, err);
    }
};

export const getAllUserBookmarks = async (req, res) => {
    try {
        const { userId } = req.body;
        const bookmarks = await getUserBookmarks(userId);
        setSuccessfulResponse(bookmarks, res);
    } catch (error) {
        return setErrorResponse(res, err);
    }
};
