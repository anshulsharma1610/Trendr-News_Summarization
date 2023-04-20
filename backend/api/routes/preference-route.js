import express from 'express';
import * as prefernceController from '../controllers/preference-controller.js';
const Router = express.Router();

Router.route('/')
    .get(prefernceController.get) //route for retrieving all user preferences.
    .post(prefernceController.post); //route for creating a new user preference.

Router.route('/:id').put(prefernceController.put) //route for updating a user preference identified by the id parameter.
    .delete(prefernceController.remove); // route for deleting a user preference identified by the id parameter.

export default Router;