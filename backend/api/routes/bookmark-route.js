import express from 'express';
import * as bookmarkController from '../controllers/bookmarkController.js';


const Router = express.Router();



Router.post('/', bookmarkController.toggleBookmarks);   // Registers a POST route at root path to toggle bookmarks for authenticated user.
Router.get('/:id', bookmarkController.getAllUserBookmarks); //Registers a GET route at path with user ID parameter to retrieve all bookmarks for the specified user.
export default Router;

