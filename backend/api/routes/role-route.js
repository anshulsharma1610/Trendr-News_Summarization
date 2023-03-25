import express from 'express';
import * as roleController from '../controllers/role-controller.js';

const Router = express.Router();

Router.route('/')
    .get(roleController.get)
    .post(roleController.post)
    .put(roleController.put)
    .delete(roleController.remove)

export default Router;
