import express from 'express';
import * as subscriptionsController from '../controllers/subscriptions-controller.js';
const Router = express.Router();

Router.route('/')
    .get(subscriptionsController.get)
    .post(subscriptionsController.post);

Router.route('/:id')
    .get(subscriptionsController.getById)
    .put(subscriptionsController.put)
    .delete(subscriptionsController.remove);

export default Router;