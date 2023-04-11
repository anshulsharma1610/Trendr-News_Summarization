import * as subscriptionService from '../services/subscriptions-service.js';
import {
    setSuccessfulResponse,
    setErrorResponse,
    setPostSuccessfulResponse,
    setbodyMissingError,
    setnotFound
} from '../util/statusCodes.js';

export const post = async (req, res) => {
    try {
        const newSubscription = req.body;
        if (!newSubscription.subTitle || !newSubscription.subDetails ||
            !newSubscription.subTenureDays || !newSubscription.subPrice) {
            return setbodyMissingError(res);
        }
        const subscription = await subscriptionService.save(newSubscription);
        setPostSuccessfulResponse(subscription, res);
    } catch (err) {
        return setErrorResponse(res, err);
    }
}

export const get = async (req, res) => {
    try {
        const subscription = await subscriptionService.getAll();
        setSuccessfulResponse(subscription, res);
    } catch (err) {
        return setErrorResponse(err, res);
    }
}

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