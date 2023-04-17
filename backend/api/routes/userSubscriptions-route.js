import express from 'express';
import * as userSubscriptionsController from '../controllers/userSubscriptions-controller.js';
const Router = express.Router();

Router.route('/')
    .get(userSubscriptionsController.get)
    .post(userSubscriptionsController.post);

Router.route('/:id')
    .get(userSubscriptionsController.getById)
    .put(userSubscriptionsController.put)
    .delete(userSubscriptionsController.remove);

export default Router;