import express from 'express';
import * as googleAuthController from '../controllers/googleAuth-controller.js';
import * as tokenCheckerController from '../controllers/tokenChecker-controller.js';
import * as basicAuthController from '../controllers/basicAuth-controller.js';
import * as fbAuthController from '../controllers/fbAuth-controller.js';
import * as twitterAuthController from '../controllers/twitterAuth-controller.js';

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

Router.route('/fb')
    .get(fbAuthController.facebook)

Router.route('/fb/callback')
    .get(fbAuthController.facebookCallback)

Router.route('/twitter')
    .get(twitterAuthController.twitter)

Router.route('/twitter/callback')
    .get(twitterAuthController.twitterCallback)

export default Router;
