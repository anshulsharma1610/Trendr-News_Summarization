import express from 'express';
import * as checkoutController from '../controllers/checkout-controller.js';

const Router = express.Router();

Router.route('/')
    .post(checkoutController.post)

export default Router;
