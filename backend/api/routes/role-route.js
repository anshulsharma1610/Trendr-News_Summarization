import express from 'express';
import * as roleController from '../controllers/role-controller.js';

const Router = express.Router();

Router.route('/')
    .get(roleController.get) //route for retrieving all roles.
    .post(roleController.post) // route for creating a new role.
    .put(roleController.put) // route for updating a role.
    .delete(roleController.remove) //route for deleting a role.

export default Router;
