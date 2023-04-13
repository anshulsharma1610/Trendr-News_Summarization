import Bookmark from "../models/bookmark.js";

export const save = async (bookmarkInput) => {
    const bookmark =  new Bookmark(bookmarkInput);
    return bookmark.save();
}

export const put = async (id, updatedBookmark) => {
    const bookmark = await Bookmark
    bookmark.findByIdAndUpdate(id, updatedBookmark).exec();
    const newBookmark= await get(id);
return newBookmark;
}

export const getbookmarkByUserID = async (userId) => {
    const bookmark = await Bookmark.find({ user: userId });
    return bookmark;
}

export const remove = async (id) => {
    const bookmark = await Bookmark.findByIdAndDelete(id).exec();
    return bookmark;  
} 
export const search = async (params) => {
    const bookmark = Bookmark.find().exec();
    return bookmark;
}

export const getBookmarkById = async (id) => {
    return await Bookmark.findById(id);
}

