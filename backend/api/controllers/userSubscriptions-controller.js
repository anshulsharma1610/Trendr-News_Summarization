import * as userSubscriptionService from '../services/userSubscription-service.js';
import {
    setSuccessfulResponse,
    setErrorResponse,
    setPostSuccessfulResponse,
    setbodyMissingError,
    setnotFound
} from '../util/statusCodes.js';

// code exports an asynchronous function that creates a new user subscription by saving the request body,
// and returns a success or error response based on the result.
export const post = async (req, res) => {
    try {
        const newUserSubscription = req.body;
        if (!newUserSubscription.userId || !newUserSubscription.subId || !newUserSubscription.price) {
            return setbodyMissingError(res);
        }
        const userSubscription = await userSubscriptionService.save(newUserSubscription);
        setPostSuccessfulResponse(userSubscription, res);
    } catch (err) {
        return setErrorResponse(res, err);
    }
}

// code exports an asynchronous function that retrieves all user subscriptions and returns a
// success or error response based on the result.

export const get = async (req, res) => {
    try {
        const userSubscription = await userSubscriptionService.getAll();
        setSuccessfulResponse(userSubscription, res);
    } catch (err) {
        return setErrorResponse(err, res);
    }
}

//  code exports an asynchronous function that updates a user subscription with the specified ID
//   using the request body, and returns a success or error response based on the result.

export const put = async (req, res) => {
    try {
        const id = req.params.id;
        const userSubscription = req.body;
        const updatedUserSubscription = await userSubscriptionService.update(id, userSubscription);
        if (!updatedUserSubscription) {
            return setnotFound(res);
        }
        setSuccessfulResponse(updatedUserSubscription, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

// code exports an asynchronous function that removes a user subscription with the specified ID, 
// and returns a success or error response based on the result.

export const remove = async (req, res) => {
    try {
        const id = req.params.id;

        const removedUserSubscription = await userSubscriptionService.remove(id);
        if (!removedUserSubscription) {
            return setnotFound(res);
        }
        setSuccessfulResponse(removedUserSubscription, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}
// code exports an asynchronous function that retrieves a user subscription with the 
// specified ID and returns a success or error response based on the result.

export const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const userSubscription = await userSubscriptionService.getById(id);
        if (!userSubscription) {
            return setnotFound(res);
        }
        setSuccessfulResponse(userSubscription, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}