import { save, put, remove, search, getBookmarkById, getbookmarkByUserID} from '../services/bookmark-service.js';
import {
    setSuccessfulResponse,
    setErrorResponse,
} from '../util/statusCodes.js';

export const post = async (request, response) => {
    try {
        const newBookmark = request.body;
            const savedbookmark = await save(newBookmark);
            setSuccessfulResponse(savedbookmark, response);        
    } catch (err) {
        setErrorResponse(err, response)
    }
}

export const getBookmarksForCurrentUser = async (request, response) => {
    try {
        const params = request.body;
        console.log(request);
        const getAllArticle = await getbookmarkByUserID(request._id); 
        setSuccessfulResponse(getAllArticle, response);
    }
    catch (err) {
        setErrorResponse(err, response)
    }
}

export const removebyid = async (request, response) => {
    try {
        console.log(request);
        const todoid = request.params.id;
        const courses=await remove(todoid);
        const msg="Record deleted successfully!";
        setSuccessfulResponse(msg, response);
    } catch (err) {
        setErrorResponse(err, response)
    }
}

export const updatebyID = async (request, response) => {
    try {
            const todolist = request.body;
            const getid= request.params.id;
            const courses=await put(getid,todolist);
            setSuccessfulResponse(courses, response)
        } 
    catch (err) 
        {
            setErrorResponse(err, response)
        }
}

export const getBookmarkByarticleId = async (req, res) => {
    try {
        const bookmarkid = req.params.id;
        const bookmark = await getBookmarkById(bookmarkid);
        if (!bookmark) {
            return res.status(404).json({ message: 'Bookmark not found' });
        }
        setSuccessfulResponse(bookmark, res);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
