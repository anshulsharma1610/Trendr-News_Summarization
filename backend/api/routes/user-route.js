import express from 'express';
import * as userController from '../controllers/user-controller.js';

const Router = express.Router();

Router.route('/')
    .get(userController.get)
    .post(userController.post)
    .put(userController.update)
    .delete(userController.remove)

Router.route('/:id')
    .get(userController.getById)

export default Router;
