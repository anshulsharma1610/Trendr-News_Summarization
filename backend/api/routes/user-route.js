import express from 'express';
import * as userController from '../controllers/user-controller.js';

const Router = express.Router();

Router.route('/')
    .get(userController.get)
    .post(userController.post)
    

Router.route('/:id')
    .get(userController.getById)
    .put(userController.update)
    .delete(userController.remove);

export default Router;
