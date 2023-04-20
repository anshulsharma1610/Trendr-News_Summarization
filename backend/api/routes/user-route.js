import express from 'express';
import * as userController from '../controllers/user-controller.js';

const Router = express.Router();

Router.route('/')
    .get(userController.get) //route for retrieving all users.
    .post(userController.post) //route for creating a new user.
    

Router.route('/:id')
    .get(userController.getById) //route for retrieving a user identified by the id parameter.
    .put(userController.update) // route for updating a user identified by the id parameter.
    .delete(userController.remove); //route for deleting a user identified by the id parameter.

export default Router;
