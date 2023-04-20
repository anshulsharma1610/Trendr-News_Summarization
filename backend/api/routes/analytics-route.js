import express from 'express';
import * as analyticsController from '../controllers/analytics-controller.js';

const Router = express.Router();

Router.route('/')
    .get(analyticsController.get) //Registers a GET route at the root path to retrieve analytics data.

export default Router;
