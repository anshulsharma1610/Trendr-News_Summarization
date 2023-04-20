import express from 'express';
import * as checkoutController from '../controllers/checkout-controller.js';

const Router = express.Router();

Router.route('/')
    .post(checkoutController.post) //Registers a POST route at root path to initiate checkout process.

Router.route('/status')
    .post(checkoutController.checkstatus) //Registers a POST route at /status path to check the status of the ongoing checkout process.

export default Router;
