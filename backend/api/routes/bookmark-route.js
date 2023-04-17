import express from 'express';
import * as bookmarkController from '../controllers/bookmarkController.js';


const Router = express.Router();

// Router.route('/').post(bookmarkController.post);
// Router.route('/user/:id').get(bookmarkController.getBookmarksForCurrentUser);

// Router.route('/:id')
//     .delete(bookmarkController.removebyid)
//     .put(bookmarkController.updatebyID)
//     .get(bookmarkController.getBookmarkByarticleId);


Router.post('/', bookmarkController.toggleBookmarks);
Router.get('/:id', bookmarkController.getAllUserBookmarks);
export default Router;

