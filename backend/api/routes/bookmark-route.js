
import express from 'express';
import * as bookmarkController from  '../controllers/bookmarkController.js';


const Router = express.Router();

Router.route('/')
.post(bookmarkController.post)
.get(bookmarkController.getAll);


Router.route('/:id')
    .delete(bookmarkController.removebyid)
    .put(bookmarkController.putbyid);

    
export default Router;


