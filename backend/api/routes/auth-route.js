import express from 'express';
import * as authController from '../controllers/auth-controller.js';
import * as tokenController from '../controllers/tokenChecker-controller.js';

const Router = express.Router();

Router.route('/google')
    .get(authController.google)

Router.route('/google/callback')
    .get(authController.googleCallback)

Router.route('/getdetails')
    .get(tokenController.getDetails)

export default Router;
