import * as userService from '../services/user-service.js';
import {setSuccessfulResponse,setErrorResponse} from '../util/statusCodes.js';

export const post = async (req, res) => {
    try {
        const newUser = req.body;
        const user = await userService.save(newUser);
        setSuccessfulResponse(user, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

export const get = async (req, res) => {
    try {
        const users = await userService.getAll();
        setSuccessfulResponse(users, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

export const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userService.getById(id);
        setSuccessfulResponse(user, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

export const update = async (req, res) => {
    try {
        const id = req.body.id;
        const user = req.body;
        const updatedUser = await userService.update(id, user);
        setSuccessfulResponse(updatedUser, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

export const remove = async (req, res) => {
    try {
        const id = req.query.id;
        const removedUser = await userService.remove(id);
        setSuccessfulResponse(removedUser, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}


