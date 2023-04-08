import express from 'express';
import * as prefernceController from  '../controllers/preference-controller.js';
const Router = express.Router();

Router.route('/')
    .get(prefernceController.get)
    .post(prefernceController.post)
    .put(prefernceController.put)
    .delete(prefernceController.remove)

export default Router;
