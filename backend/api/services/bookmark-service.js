import Bookmark from "../models/bookmark.js";

export const save = async (bookmarkInput) => {
    const bookmark =  new Bookmark(bookmarkInput);
    return bookmark.save();
}

export const put = async (id, updatedBookmark) => {
    const bookmark = await Bookmark
        .findByIdAndUpdate(id, updatedBookmark)
        .exec();
        const newbookmark= await get(id);
    return newbookmark;
}

export const get = async (id) => {
    const bookmark = Bookmark.findById(id).exec()
    return bookmark
}

export const remove = async (id) => {
    const bookmark = await Bookmark.findByIdAndDelete(id).exec();
    return bookmark;  
} 

export const search = async (params) => {
    const bookmark = Bookmark.find().exec();
    return bookmark
}

export const validationService= async(id)=>
{
    var errormsg = null;
    try{
        const bookmark= await Bookmark.findById(id);
        if(!bookmark)
        {
          
            errormsg= "id not found"
        }
    }
    catch(err){
        errormsg ="id not found"
    }
    

    return errormsg;
}