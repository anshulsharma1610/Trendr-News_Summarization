import express from 'express';
import * as subscriptionsController from '../controllers/subscriptions-controller.js';
const Router = express.Router();

Router.route('/')
    .get(subscriptionsController.get) //route for retrieving all subscriptions.
    .post(subscriptionsController.post); //route for creating a new subscription.

Router.route('/:id')
    .get(subscriptionsController.getById) //route for retrieving a subscription identified by the id parameter.
    .put(subscriptionsController.put) //route for updating a subscription identified by the id parameter.
    .delete(subscriptionsController.remove); // route for deleting a subscription identified by the id parameter.

export default Router;