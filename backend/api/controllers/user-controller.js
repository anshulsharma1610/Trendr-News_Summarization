import * as userService from '../services/user-service.js';
import {
    setSuccessfulResponse,
    setErrorResponse,
    setPostSuccessfulResponse,
    setbodyMissingError,
    setnotFound
} from '../util/statusCodes.js';

export const post = async (req, res) => {
    try {
        const newUser = req.body;
        // if (!newUser.fname || !newUser.lname || !newUser.mobile || 
        //     !newUser.email || !newUser.password || !newUser.location
        //     || !newUser.image) {
        //     setbodyMissingError( res);
        // }
        const user = await userService.save(newUser);
        setPostSuccessfulResponse(user, res);
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
        // if (!user) {
        //     setnotFound(res);
        // }
        setSuccessfulResponse(user, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

export const update = async (req, res) => {
    try {
        const id = req.body.id;
        const user = req.body;
        // if (!newUser.fname || !newUser.lname || !newUser.mobile || 
        //     !newUser.email || !newUser.password || !newUser.location
        //     || !newUser.image) {
        //     setbodyMissingError( res);
        // }
        const updatedUser = await userService.update(id, user);
        // if(!updatedUser){
        //     setnotFound(res); 
        // }
        setSuccessfulResponse(updatedUser, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

export const remove = async (req, res) => {
    try {
        const id = req.query.id;
        const removedUser = await userService.remove(id);
        // if(!removedUser){
        //     setnotFound(res);
        // }
        setSuccessfulResponse(removedUser, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}