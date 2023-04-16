import express from 'express';
import * as analyticsController from '../controllers/analytics-controller.js';

const Router = express.Router();

Router.route('/')
    .post(analyticsControllers.get)

export default Router;
