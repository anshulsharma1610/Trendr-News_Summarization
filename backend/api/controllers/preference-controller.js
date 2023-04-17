import * as preferenceService from '../services/preference-service.js';
import {
    setSuccessfulResponse,
    setErrorResponse,
    setPostSuccessfulResponse,
    setbodyMissingError,
    setnotFound
} from '../util/statusCodes.js';

export const post = async (req, res) => {
    try {
        const newPrefernce = req.body;
        if (!newPrefernce.prefernceName) {
            return setbodyMissingError(res);
        }
        const prefernce = await preferenceService.save(newPrefernce);
        setPostSuccessfulResponse(prefernce, res);
    } catch (err) {
        return setErrorResponse(res, err);
    }
}

export const get = async (req, res) => {
    try {
        const preferences = await preferenceService.getAll();
        setSuccessfulResponse(preferences, res);
    } catch (err) {
        return setErrorResponse(err, res);
    }
}

export const put = async (req, res) => {
    try {
        const id = req.params.id;
        const prefrence = req.body;
        const updatedPrefernce = await preferenceService.update(id, prefrence);
        if (!updatedPrefernce) {
            return setnotFound(res);
        }
        setSuccessfulResponse(updatedPrefernce, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

export const remove = async (req, res) => {
    try {
        const id = req.params.id;

        const removedPrefernce = await preferenceService.remove(id);
        if (!removedPrefernce) {
            console.log("here")
            return setnotFound(res);
        }
        setSuccessfulResponse(removedPrefernce, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

// get by id
export const getById = async (id) => {
    try {
        const preference = await Preference.findById(id);
        return preference;
    } catch (err) {
        throw err;
    }
}