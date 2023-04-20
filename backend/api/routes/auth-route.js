import express from 'express';
import * as googleAuthController from '../controllers/googleAuth-controller.js';
import * as tokenCheckerController from '../controllers/tokenChecker-controller.js';
import * as basicAuthController from '../controllers/basicAuth-controller.js';
import * as fbAuthController from '../controllers/fbAuth-controller.js';
import * as twitterAuthController from '../controllers/twitterAuth-controller.js';

const Router = express.Router();

Router.route('/google')
    .get(googleAuthController.google) //GET route for initiating Google OAuth authentication.

Router.route('/google/callback')
    .get(googleAuthController.googleCallback) //GET route for handling the callback from Google OAuth authentication.

Router.route('/getdetails')
    .get(tokenCheckerController.getDetails) //GET route for retrieving user details after authentication.

Router.route('/signup')
    .post(basicAuthController.signup) //POST route for registering a new user.

Router.route('/login')
    .post(basicAuthController.login) //POST route for user login.

Router.route('/fb')
    .get(fbAuthController.facebook) //GET route for initiating Facebook OAuth authentication.

Router.route('/fb/callback')
    .get(fbAuthController.facebookCallback) //GET route for handling the callback from Facebook OAuth authentication.

Router.route('/twitter')
    .get(twitterAuthController.twitter) //GET route for initiating Twitter OAuth authentication.

Router.route('/twitter/callback')
    .get(twitterAuthController.twitterCallback) // GET route for handling the callback from Twitter OAuth authentication.

export default Router;
