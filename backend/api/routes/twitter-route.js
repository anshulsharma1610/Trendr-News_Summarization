import express from 'express';
import * as twitterController from '../controllers/twitter-controller.js';

const Router = express.Router();

Router.route('/')
    .get(twitterController.get)

export default Router;
