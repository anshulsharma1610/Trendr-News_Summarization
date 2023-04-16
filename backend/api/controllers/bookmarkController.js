import { toggleBookmark, getUserBookmarks } from '../services/bookmark-service.js';

import {
    setSuccessfulResponse,
    setErrorResponse
} from '../util/statusCodes.js';

export const toggleBookmarks = async (req, res) => {
    try {
        const { userId, articleId } = req.body;
        const result = await toggleBookmark(userId, articleId);
        res.status(200).json(result);
    } catch (error) {
        return setErrorResponse(res, error);
    }
};

export const getAllUserBookmarks = async (req, res) => {
    try {
        const userId = req.params.id;
        const bookmarks = await getUserBookmarks(userId);
        setSuccessfulResponse(bookmarks, res);
    } catch (error) {
        return setErrorResponse(res, error);
    }
};
