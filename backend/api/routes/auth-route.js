import express from 'express';
import * as googleAuthController from '../controllers/googleAuth-controller.js';
import * as tokenCheckerController from '../controllers/tokenChecker-controller.js';
import * as basicAuthController from '../controllers/basicAuth-controller.js';

const Router = express.Router();

Router.route('/google')
    .get(googleAuthController.google)

Router.route('/google/callback')
    .get(googleAuthController.googleCallback)

Router.route('/getdetails')
    .get(tokenCheckerController.getDetails)

Router.route('/signup')
    .post(basicAuthController.signup)

Router.route('/login')
    .post(basicAuthController.login)

export default Router;
