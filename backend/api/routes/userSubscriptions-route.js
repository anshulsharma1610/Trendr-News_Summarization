import express from 'express';
import * as userSubscriptionsController from '../controllers/userSubscriptions-controller.js';
const Router = express.Router();

Router.route('/')
    .get(userSubscriptionsController.get) //route for retrieving all user subscriptions.
    .post(userSubscriptionsController.post); //route for creating a new user subscription.

Router.route('/:id')
    .get(userSubscriptionsController.getById) //route for retrieving a user subscription identified by the id parameter.
    .put(userSubscriptionsController.put) //route for updating a user subscription identified by the id parameter.
    .delete(userSubscriptionsController.remove); //route for deleting a user subscription identified by the id parameter.

export default Router;