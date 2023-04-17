import express from 'express';
import * as checkoutController from '../controllers/checkout-controller.js';

const Router = express.Router();

Router.route('/')
    .post(checkoutController.post)

Router.route('/status')
    .post(checkoutController.checkstatus)

export default Router;
