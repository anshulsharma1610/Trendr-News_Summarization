import express from 'express';
import * as twitterController from '../controllers/twitter-controller.js';

const Router = express.Router();

Router.route('/')
    .get(twitterController.get) //route maps to the root endpoint of the router and handles GET requests by calling the "get" method of the "twitterController".

export default Router;
