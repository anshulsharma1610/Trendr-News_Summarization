import * as subscriptionService from '../services/subscriptions-service.js';
import {
    setSuccessfulResponse,
    setErrorResponse,
    setPostSuccessfulResponse,
    setbodyMissingError,
    setnotFound
} from '../util/statusCodes.js';

// code exports an asynchronous function that creates a new subscription by saving the request body,
//  and returns a success or error response based on the result.

export const post = async (req, res) => {
    try {
        const newSubscription = req.body;
        if (!newSubscription.title || !newSubscription.desc ||
            !newSubscription.tenureDays || !newSubscription.price || !newSubscription.features) {
            return setbodyMissingError(res);
        }
        const subscription = await subscriptionService.save(newSubscription);
        setPostSuccessfulResponse(subscription, res);
    } catch (err) {
        return setErrorResponse(res, err);
    }
}
// code exports an asynchronous function that retrieves all subscriptions and returns a success or 
// error response based on the result.

export const get = async (req, res) => {
    try {
        const subscription = await subscriptionService.getAll();
        setSuccessfulResponse(subscription, res);
    } catch (err) {
        return setErrorResponse(err, res);
    }
}

// code exports an asynchronous function that updates a subscription with the specified ID,
//  and returns a success or error response based on the result.

export const put = async (req, res) => {
    try {
        const id = req.params.id;
        const subscription = req.body;
        const updatedSubscription = await subscriptionService.update(id, subscription);
        if (!updatedSubscription) {
            return setnotFound(res);
        }
        setSuccessfulResponse(updatedSubscription, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

// This function removes a subscription by ID and sends a success response if 
// the subscription is found and deleted, otherwise sends a not found error response.

export const remove = async (req, res) => {
    try {
        const id = req.params.id;

        const removedSubscription = await subscriptionService.remove(id);
        if (!removedSubscription) {
            return setnotFound(res);
        }
        setSuccessfulResponse(removedSubscription, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

//  An asynchronous function named getById that retrieves a subscription by its ID 
// and sends a successful response containing the subscription data.
//  If the subscription does not exist, it sends a not found response.

export const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const subscription = await subscriptionService.getById(id);
        if (!subscription) {
            return setnotFound(res);
        }
        setSuccessfulResponse(subscription, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}