import * as userService from '../services/user-service.js';
import {
    setSuccessfulResponse,
    setErrorResponse,
    setPostSuccessfulResponse,
    setbodyMissingError,
    setnotFound
} from '../util/statusCodes.js';
import * as userSubscriptionService from '../services/userSubscription-service.js';


// An async function that saves the request body as a new user and returns either
//  a successful response with the new user data or an error response if there was a problem.
export const post = async (req, res) => {
    try {
        const newUser = req.body;
        // if (!newUser.fname || !newUser.lname || !newUser.mobile || 
        //     !newUser.email || !newUser.password || !newUser.location
        //     || !newUser.image) {
        //    return setbodyMissingError( res);
        // }
        const user = await userService.save(newUser);
        setPostSuccessfulResponse(user, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

// An asynchronous function that retrieves all users and returns either a 
// successful response with the user data or an error response if there was a problem.

export const get = async (req, res) => {
    try {
        const users = await userService.getAll();
        setSuccessfulResponse(users, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

// An asynchronous function that retrieves a user by their ID and returns either a successful 
// response with the user data or an error response if there was a problem.

export const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userService.getById(id);
        // if (!user) {
        //  return   setnotFound(res);
        // }
        setSuccessfulResponse(user, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

// code defines an async function that updates a user's information with the
// provided request body and responds with a success or error response.

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const user = req.body;
        // if (!newUser.fname || !newUser.lname || !newUser.mobile || 
        //     !newUser.email || !newUser.password || !newUser.location
        //     || !newUser.image) {
        //     return setbodyMissingError( res);
        // }
        const updatedUser = await userService.update(id, user);
        // if(!updatedUser){
        //    return setnotFound(res); 
        // }
        setSuccessfulResponse(updatedUser, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}
// An async function that removes a user with the specified ID and responds with a success or error response.

export const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const removedUser = await userService.remove(id);
        // if(!removedUser){
        //     return setnotFound(res);
        // }
        setSuccessfulResponse(removedUser, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

// This below code exports an asynchronous function that retrieves user information, 
// including their subscription status, using the email provided in the request body.

export const getUserInfo = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await userService.findUserByEmail(email);
        if (!user) {
            return res.status(401).json({ message: 'Not found' });
        }

        let isUserSubbed = await userSubscriptionService.getByUserId(user._id);
        let userSubscription = {};

        if (isUserSubbed.length > 0) {
            let sub = await subscriptionService.getById(isUserSubbed[0].subId);
            if (Object.keys(sub).length > 0) {
                userSubscription['isUserSubbed'] = true;
                userSubscription['userSub'] = isUserSubbed[0];
                userSubscription['subscription'] = sub;
            } else {
                userSubscription['isUserSubbed'] = false;
            }
        }
        res.status(200).json({ user, userSubscription });
    } catch (err) {
        console.log(err);
        next(err);
    }
}

//  code exports an asynchronous function that checks if a user is subscribed
//  by retrieving their subscription information using their user ID.

export const isUserSubbed = async (id) => {
    let isUserSubbed = await userSubscriptionService.getByUserId(id);
    if (isUserSubbed.length > 0) {
        return true;
    }
    return false;
}

