import * as userSubscriptionService from '../services/userSubscription-service.js';
import {
    setSuccessfulResponse,
    setErrorResponse,
    setPostSuccessfulResponse,
    setbodyMissingError,
    setnotFound
} from '../util/statusCodes.js';

export const post = async (req, res) => {
    try {
        const newUserSubscription = req.body;
        if (!newUserSubscription.userId || !newUserSubscription.subId ||
            !newUserSubscription.createdAt || !newUserSubscription.validTill) {
            return setbodyMissingError(res);
        }
        const userSubscription = await userSubscriptionService.save(newUserSubscription);
        setPostSuccessfulResponse(userSubscription, res);
    } catch (err) {
        return setErrorResponse(res, err);
    }
}

export const get = async (req, res) => {
    try {
        const userSubscription = await userSubscriptionService.getAll();
        setSuccessfulResponse(userSubscription, res);
    } catch (err) {
        return setErrorResponse(err, res);
    }
}

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